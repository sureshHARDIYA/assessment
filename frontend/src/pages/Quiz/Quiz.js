import React, { Fragment } from 'react';
import { useStore } from 'store';
import Head from 'components/Head';
import { Query } from 'react-apollo';
import Empty from 'components/Empty';
import styled from 'styled-components';
import Skeleton from 'components/Skeleton';
import { Loading } from 'components/Loading';
import { Container } from 'components/Layout';
import InfiniteScroll from 'components/InfiniteScroll';

import PeopleCard from './PeopleCard';

// import { GET_QUIZES } from 'graphql/quiz';
import { PEOPLE_PAGE_USERS_LIMIT } from 'constants/DataLimit';

const Root = styled(Container)`
  margin-top: ${p => p.theme.spacing.lg};
`;

const PeopleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 3fr));
  grid-auto-rows: auto;
  grid-gap: 10px;
  margin-bottom: ${p => p.theme.spacing.lg};
`;

/**
 * People page
 */
const Quiz = () => {
  const [{ auth }] = useStore();
  const variables = {
    userId: auth.user.id,
    skip: 0,
    limit: PEOPLE_PAGE_USERS_LIMIT,
  };

  return (
    <Root maxWidth="md">
      <Head title="Find new Quiz" />
      <Query
        // query={GET_QUIZES}
        variables={variables}
        notifyOnNetworkStatusChange
      >
        {({ data, loading, fetchMore, networkStatus }) => {
          console.log('here here....');
          if (loading && networkStatus === 1) {
            return (
              <PeopleContainer>
                <Skeleton height={280} count={PEOPLE_PAGE_USERS_LIMIT} />
              </PeopleContainer>
            );
          }

          console.log('potty potty', data);

          const { users, count } = data.getUsers;

          if (!users.length > 0) return <Empty text="No quizes found yet..." />;

          return (
            <InfiniteScroll
              data={users}
              dataKey="getUsers.users"
              count={parseInt(count)}
              variables={variables}
              fetchMore={fetchMore}
            >
              {data => {
                const showNextLoading =
                  loading && networkStatus === 3 && count !== data.length;

                return (
                  <Fragment>
                    <PeopleContainer>
                      {data.map(user => (
                        <PeopleCard key={user.id} user={user} />
                      ))}
                    </PeopleContainer>

                    {showNextLoading && <Loading top="lg" />}
                  </Fragment>
                );
              }}
            </InfiniteScroll>
          );
        }}
      </Query>
    </Root>
  );
};

export default Quiz;
