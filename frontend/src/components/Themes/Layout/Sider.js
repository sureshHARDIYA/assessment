import React, { PureComponent } from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import Menus from './Menu';

class Sider extends PureComponent {
  static propTypes = {
    isNavbar: PropTypes.bool,
    siderFold: PropTypes.bool,
  };

  render() {
    const { siderFold } = this.props;

    return (
      <Layout.Sider
        width={250}
        collapsible
        trigger={null}
        collapsed={siderFold}
        className="sider-layout-themes-components"
      >
        <NavLink exact to="/admin" className="header-logo">
          {siderFold ? 'LA' : 'Landed Admin'}
        </NavLink>
        <Menus />
      </Layout.Sider>
    );
  }
}

const mapStateToProps = state => ({
  isNavbar: state.getIn(['app', 'isNavbar']),
  siderFold: state.getIn(['app', 'siderFold']),
});

export default withRouter(connect(mapStateToProps)(Sider));
