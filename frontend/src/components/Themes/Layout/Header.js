import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout, Tooltip, Icon } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { onLeftSwitchRequest } from 'actions/app';
import { onLogoutRequest } from 'actions/currentUser';

import UserInfo from '../UserInfo';
import SelectLang from '../SelectLang';
import HeaderSearch from '../HeaderSearch';

class HeaderAdmin extends Component {
  render() {
    const { siderFold, onLeftSwitch } = this.props;

    return (
      <Layout.Header className="header-layout-themes-components">
        <Icon
          className="trigger"
          onClick={onLeftSwitch}
          type={siderFold ? 'menu-unfold' : 'menu-fold'}
        />
        <div className="right">
          <HeaderSearch
            dataSource={[]}
            placeholder="Search"
            onSearch={value => console.log('onSearch input', value)}
            onPressEnter={value => console.log('onPressEnter input', value)}
          />
          <Tooltip title="Help">
            <a
              target="_blank"
              className="action"
              href="https://landed.com"
              rel="noopener noreferrer"
            >
              <Icon type="question-circle-o" />
            </a>
          </Tooltip>
          <UserInfo className="action" onLogout={this.props.onLogout} />
          <SelectLang className="action" />
        </div>
      </Layout.Header>
    );
  }
}

HeaderAdmin.propTypes = {
  siderFold: PropTypes.bool,
  onLogout: PropTypes.func,
  onLeftSwitch: PropTypes.func,
};

const mapStateToProps = state => ({
  isNavbar: state.getIn(['app', 'isNavbar']),
  siderFold: state.getIn(['app', 'siderFold']),
});

const mapDispatchToProps = dispatch => ({
  onLeftSwitch: () => dispatch(onLeftSwitchRequest()),
  onLogout: () => dispatch(onLogoutRequest()),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(HeaderAdmin)
);
