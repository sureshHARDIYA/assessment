import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'antd';

const newComponent = props => {
  const { input, meta, hasFeedback = true, label, className, ...rest } = props;
  const hasError = meta.touched && meta.invalid;
  const InputComponent = rest.multi ? Input.TextArea : Input;

  return (
    <Form.Item
      label={label}
      className={className}
      help={hasError && meta.error}
      hasFeedback={hasFeedback && hasError}
      validateStatus={hasError ? 'error' : 'success'}
    >
      <InputComponent size="large" {...input} {...rest} />
    </Form.Item>
  );
};

newComponent.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  meta: PropTypes.shape({
    asyncValidating: PropTypes.bool,
    error: PropTypes.string,
    touched: PropTypes.bool,
  }).isRequired,
  label: PropTypes.node,
  type: PropTypes.string,
  className: PropTypes.string,
  hasFeedback: PropTypes.bool,
};

export default newComponent;
