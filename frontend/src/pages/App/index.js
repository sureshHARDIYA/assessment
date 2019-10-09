import React, { Component } from 'react';
import Cookie from 'js-cookie';
import PropTypes from 'prop-types';
import { Layout, Spin } from 'antd';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { onRenewRequest } from 'actions/currentUser';
import * as UserSelector from 'selectors/currentUser';
import { AuthLayout, UnauthLayout } from 'components/Themes/Layout';

import { Authenticated, Unauthenticated } from '../../pages/routes';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
    };
  }

  componentDidMount() {
    if (Cookie.get('accessToken')) {
      this.props.onRenew(() => this.setState({ loaded: true }));
    } else {
      this.setState({ loaded: true });
    }
  }

  get renderAuth() {
    return (
      <AuthLayout>
        <Authenticated />
      </AuthLayout>
    );
  }

  get renderUnauth() {
    return (
      <UnauthLayout>
        <Unauthenticated />
      </UnauthLayout>
    );
  }

  get renderContent() {
    if (!this.state.loaded) {
      return null;
    }

    return !this.props.currentUser.uid ? this.renderUnauth : this.renderAuth;
  }

  render() {
    return (
      <Spin spinning={!this.state.loaded}>
        <Layout style={{ minHeight: '100vh' }}>{this.renderContent}</Layout>
      </Spin>
    );
  }
}

App.propTypes = {
  onRenew: PropTypes.func,
  currentUser: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.array,
  ]),
};

const mapStateToProps = createStructuredSelector({
  isLoaded: UserSelector.isLoaded(),
  currentUser: UserSelector.getUser(),
});

const mapDispatchToProps = dispatch => ({
  onRenew: cb => dispatch(onRenewRequest({ cb })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
