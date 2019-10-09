import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Input } from 'components/Forms/Fields';
import { Card, Row, Col, Form, Button } from 'antd';
import { onLoginRequest } from 'actions/currentUser';
import { Field, reduxForm } from 'redux-form/immutable';

class NormalLoginForm extends React.Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    form: PropTypes.object,
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <Form onSubmit={handleSubmit} className="login-form" layout="vertical">
        <Card title="Login">
          <Row gutter={16}>
            <Col md={12} sm={24}>
              <Form.Item>
                <Field
                  showTime
                  className="full"
                  label="username"
                  name="username"
                  component={Input}
                />
              </Form.Item>
              <Form.Item>
                <Field
                  showTime
                  className="full"
                  label="password"
                  name="password"
                  component={Input}
                />
              </Form.Item>
              <Form.Item>
                <a className="login-form-forgot" href="#">
                  Forgot password
                </a>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Log in
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Card>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(
  NormalLoginForm
);

WrappedNormalLoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onSubmit: params => dispatch(onLoginRequest(params)),
});

const validate = values => {
  const errors = {};
  if (!values.get('username')) {
    errors.username = 'username is Required!';
  }

  if (!values.get('password')) {
    errors.password = 'password is Required!';
  }

  return errors;
};

export default connect(
  null,
  mapDispatchToProps
)(
  reduxForm({
    enableReinitialize: true,
    form: 'login-form',
    validate,
  })(WrappedNormalLoginForm)
);
