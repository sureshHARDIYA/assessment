import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'antd';
import cx from 'classnames';
import ReactCustomGoogleAutocomplete from 'react-google-autocomplete';

const newComponent = props => {
  const {
    input,
    meta,
    hasFeedback = true,
    label,
    className,
    types,
    appenGoogleMap,
    onPlaceSelected,
    ...rest
  } = props;
  const hasError = meta.touched && meta.invalid;

  return (
    <Form.Item
      label={label}
      className={className}
      help={hasError && meta.error}
      hasFeedback={hasFeedback && hasError}
      validateStatus={hasError ? 'error' : 'success'}
    >
      <ReactCustomGoogleAutocomplete
        {...rest}
        types={types || ['address']}
        onPlaceSelected={place => {
          const address = appenGoogleMap
            ? `${place.formatted_address}_#_#_${place.url}`
            : place.formatted_address;
          onPlaceSelected && onPlaceSelected(place);
          return input.onChange(address);
        }}
        className={cx('ant-input ant-input-lg', {
          'form-control': true,
          'is-invalid': meta.touched && meta.invalid,
        })}
        onChange={e => onPlaceSelected && onPlaceSelected(null, e)}
        onKeyDown={e =>
          e.keyCode === 13 && onPlaceSelected && onPlaceSelected(null, e)
        }
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
  type: PropTypes.string,
  className: PropTypes.string,
  hasFeedback: PropTypes.bool,
  types: PropTypes.array,
  appenGoogleMap: PropTypes.bool,
  onPlaceSelected: PropTypes.func,
};

export default newComponent;
