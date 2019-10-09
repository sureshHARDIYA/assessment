import { CURRENTUSER } from './constants';

export const onLoginRequest = (params = {}) => ({
  type: CURRENTUSER.LOGIN_REQUEST,
  ...params.toJS(),
});

export const onLoginFailure = (params = {}) => ({
  type: CURRENTUSER.LOGIN_FAILURE,
  ...params,
});

export const onLoginSuccess = (params = {}) => ({
  type: CURRENTUSER.LOGIN_SUCCESS,
  ...params,
});

export const onLogoutRequest = (params = {}) => ({
  type: CURRENTUSER.LOGOUT_REQUEST,
  ...params,
});

export const onLogoutFailure = (params = {}) => ({
  type: CURRENTUSER.LOGOUT_FAILURE,
  ...params,
});

export const onLogoutSuccess = (params = {}) => ({
  type: CURRENTUSER.LOGOUT_SUCCESS,
  ...params,
});

export const onCallbackRequest = (params = {}) => ({
  type: CURRENTUSER.CALLBACK_REQUEST,
  ...params,
});

export const onCallbackFailure = (params = {}) => ({
  type: CURRENTUSER.CALLBACK_FAILURE,
  ...params,
});

export const onCallbackSuccess = (params = {}) => ({
  type: CURRENTUSER.CALLBACK_SUCCESS,
  ...params,
});

export const onRenewRequest = (params = {}) => ({
  type: CURRENTUSER.RENEW_REQUEST,
  ...params,
});

export const onRenewFailure = (params = {}) => ({
  type: CURRENTUSER.RENEW_FAILURE,
  ...params,
});

export const onRenewSuccess = (params = {}) => ({
  type: CURRENTUSER.RENEW_SUCCESS,
  ...params,
});
