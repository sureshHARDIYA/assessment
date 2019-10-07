import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { Spacing } from 'components/Layout';
import {
  ExploreIcon,
  NotificationIcon,
  HomeIcon,
  PeopleIcon,
} from 'components/icons';

const Link = styled(NavLink)`
  text-decoration: none;
  transition: color 0.1s;
  color: ${p => p.theme.colors.text.primary};
  display: block;
  padding-left: ${p => p.theme.spacing.xs};
  border: 1px solid transparent;

  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid ${p => p.theme.colors.grey[300]};
  }

  &.selected {
    color: ${p => p.theme.colors.primary.main};
    font-weight: ${p => p.theme.font.weight.bold};
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid ${p => p.theme.colors.grey[300]};

    svg path {
      fill: ${p => p.theme.colors.primary.main};
    }
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  line-height: 40px;
  font-size: ${p => p.theme.font.size.xs};
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
`;

/**
 * Navigation component used in SideBar
 */
const Navigation = () => {
  return (
    <List>
      <Link exact activeClassName="selected" to="/">
        <ListItem>
          <HomeIcon />
          <Spacing right="sm" />
          Home
        </ListItem>
      </Link>

      <Link exact activeClassName="selected" to="/explore">
        <ListItem>
          <ExploreIcon width={20} />
          <Spacing right="sm" />
          Explore
        </ListItem>
      </Link>

      <Link exact activeClassName="selected" to="/people">
        <ListItem>
          <PeopleIcon />
          <Spacing right="sm" />
          People
        </ListItem>
      </Link>

      <Link exact activeClassName="selected" to="/notifications">
        <ListItem>
          <NotificationIcon width={18} />
          <Spacing right="sm" />
          Notifications
        </ListItem>
      </Link>
    </List>
  );
};

export default Navigation;
