import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { onLogout } from 'actions/currentUser';

import { createStructuredSelector } from 'reselect';
import * as UserSelector from 'selectors/currentUser';

export const isAuth = OldComponent => {
  const newComponent = props => <OldComponent {...props} />;

  newComponent.defaultProps = { currentUser: {} };

  const mapStateToProps = createStructuredSelector({
    isLoaded: UserSelector.isLoaded(),
    isLoggedIn: UserSelector.isLoggedIn(),
    currentUser: UserSelector.getCurrentUser(),
  });

  const mapDispatchToProps = dispatch => ({
    onLogout: () => dispatch(onLogout()),
    dispatch,
  });

  return withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(newComponent)
  );
};

export const isRequired = (OldComponent, role = false) => {
  class newComponent extends Component {
    onChecking(props) {
      const {
        currentUser = {},
        history,
        location,
        isLoggedIn,
        isLoaded,
      } = props;

      if (isLoaded) {
        document.body.classList[isLoggedIn ? 'add' : 'remove']('signed-in');

        if (!currentUser.uid) {
          history.replace('/sign-in');
        } else if (
          role &&
          currentUser.role !== role &&
          location.pathname.match(/^\/admin/)
        ) {
          history.replace('/');
        }
      }
    }

    render() {
      return <OldComponent {...this.props} />;
    }
  }

  newComponent.propTypes = {
    isLoaded: PropTypes.bool,
    history: PropTypes.object,
    location: PropTypes.object,
    isLoggedIn: PropTypes.bool,
    currentUser: PropTypes.object,
  };

  return isAuth(newComponent);
};
