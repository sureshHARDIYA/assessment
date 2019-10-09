import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import Sider from './Sider';
import Header from './Header';

const ThemeLayout = ({ children }) => (
  <Layout className="layouts-components" style={{ minHeight: '100vh' }}>
    <Sider />
    <Layout>
      <Header />
      <Layout.Content>{children}</Layout.Content>
    </Layout>
  </Layout>
);

ThemeLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.array,
  ]),
};

export default ThemeLayout;
