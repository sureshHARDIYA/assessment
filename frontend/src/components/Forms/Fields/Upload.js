import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Form, Upload, Icon, Button } from 'antd';

const newComponent = props => {
  const { input, meta, hasFeedback = true, label, className, ...rest } = props;
  const [status, onStatus] = useState(input.value ? 'success' : 'none');
  const hasError = meta.touched && meta.invalid;

  const upprops = {
    action: '/api/offers/upload',
    showUploadList: false,
    ...input,
    ...rest,
    name: 'file',
  };

  const onChange = info => {
    onStatus(info.file.status);
    if (info.file.status === 'done') {
      input.onChange({
        reviewed: false,
        date: new Date().toISOString(),
        link: info.file.response.message.box_url,
      });
    } else if (info.file.status === 'error') {
      console.log(`${info.file.name} file upload failed.`);
    }
  };

  const onRemove = () => {
    onStatus('none');
    input.onChange(null);
  };

  return (
    <Form.Item
      label={label}
      help={hasError && meta.error}
      hasFeedback={hasFeedback && hasError}
      validateStatus={hasError ? 'error' : 'success'}
    >
      <Upload.Dragger
        {...upprops}
        onChange={onChange}
        disabled={status !== 'none'}
        className={classnames(className, status)}
      >
        {status === 'none' ? (
          <span>
            <Icon type="upload" /> Drop / Select
          </span>
        ) : (
          <Button onClick={onRemove}>
            <Icon type="close" />
            Remove
          </Button>
        )}
      </Upload.Dragger>
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
