import PropTypes from 'prop-types';
import { Avatar, Menu, Dropdown } from 'antd';
import React from 'react';
import classNames from 'classnames';
import './index.scss';

const UserInfo = props => {
  const { className, onLogout } = props;

  const options = (
    <Menu className={'menu'} selectedKeys={[]} onClick={onLogout}>
      <Menu.Item key="logout">Logout</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={options} placement="bottomRight">
      <span className={classNames('account dropDown', className)}>
        <Avatar size="small" className="avatar" alt="avatar">
          A
        </Avatar>
        <span className="user-name">Admin</span>
      </span>
    </Dropdown>
  );
};

UserInfo.propTypes = {
  className: PropTypes.string,
  onLogout: PropTypes.func.isRequired,
};

export default UserInfo;
