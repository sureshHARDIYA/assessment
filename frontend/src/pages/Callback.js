import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Spin } from 'antd';
import { onCallbackRequest } from 'actions/currentUser';

const Callback = ({ onCallback }) => {
  onCallback();

  return (
    <Spin tip="Handling...">
      <div style={{ width: 300, height: 200 }} />
    </Spin>
  );
};

Callback.propTypes = {
  onCallback: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onCallback: () => dispatch(onCallbackRequest()),
});

export default connect(
  null,
  mapDispatchToProps
)(Callback);
