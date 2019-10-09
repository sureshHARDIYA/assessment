import React from 'react';
import PropTypes from 'prop-types';
import { Form, InputNumber } from 'antd';

const newComponent = props => {
  const { input, meta, hasFeedback = true, label, className, ...rest } = props;
  const hasError = meta.touched && meta.invalid;

  return (
    <Form.Item
      label={label}
      className={className}
      help={hasError && meta.error}
      hasFeedback={hasFeedback && hasError}
      validateStatus={hasError ? 'error' : 'success'}
    >
      <InputNumber
        size="large"
        {...input}
        {...rest}
        parser={value => value.replace(/\$\s?|(,*)/g, '')}
      />
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
  className: PropTypes.string,
  hasFeedback: PropTypes.bool,
};

export default newComponent;
