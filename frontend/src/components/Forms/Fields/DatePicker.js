import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Form, DatePicker } from 'antd';

class newComponent extends Component {
  render() {
    const {
      input,
      meta,
      hasFeedback = true,
      defaultValue = null,
      label,
      ...rest
    } = this.props;
    const hasError = meta.touched && meta.invalid;
    input.value = moment(input.value).isValid()
      ? moment(input.value)
      : defaultValue;

    return (
      <Form.Item
        label={label}
        help={hasError && meta.error}
        hasFeedback={hasFeedback && hasError}
        validateStatus={hasError ? 'error' : 'success'}
      >
        <DatePicker size="large" {...input} {...rest} />
      </Form.Item>
    );
  }
}

newComponent.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }).isRequired,
  meta: PropTypes.shape({
    asyncValidating: PropTypes.bool,
    error: PropTypes.string,
    touched: PropTypes.bool,
  }).isRequired,
  label: PropTypes.node,
  type: PropTypes.string,
  keyItem: PropTypes.object,
  hasFeedback: PropTypes.bool,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default newComponent;
