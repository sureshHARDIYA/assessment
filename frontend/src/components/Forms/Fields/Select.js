import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'antd';
// import { Select } from 'antd-virtualized';

import Select from 'antd-virtualized/lib/select';
import 'antd-virtualized/dist/antdv.css'; // or 'antd-virtualized/dist/antdv.less'

class newComponent extends Component {
  render() {
    const {
      input,
      meta,
      hasFeedback = true,
      labelKey,
      label,
      ...rest
    } = this.props;
    const hasError = meta.touched && meta.invalid;

    return (
      <Form.Item
        label={label}
        help={hasError && meta.error}
        hasFeedback={hasFeedback && hasError}
        validateStatus={hasError ? 'error' : 'success'}
      >
        <Select
          size="large"
          allowClear
          filterOption={(input, option) =>
            (typeof option === 'string'
              ? option
              : option[labelKey || 'label']
            ).indexOf(input) !== -1
          }
          {...input}
          {...rest}
        />
      </Form.Item>
    );
  }
}

newComponent.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  meta: PropTypes.shape({
    asyncValidating: PropTypes.bool,
    error: PropTypes.string,
    touched: PropTypes.bool,
  }).isRequired,
  multi: PropTypes.bool,
  label: PropTypes.node,
  type: PropTypes.string,
  keyItem: PropTypes.object,
  hasFeedback: PropTypes.bool,
  labelKey: PropTypes.string,
  valueKey: PropTypes.string,
};

export default newComponent;
