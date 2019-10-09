import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

const ThemeLayout = ({ children }) => (
  <Layout className="layouts-components" style={{ minHeight: '100vh' }}>
    <Layout.Content>{children}</Layout.Content>
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
