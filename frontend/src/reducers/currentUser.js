import Cookie from 'js-cookie';
import { fromJS } from 'immutable';
import { createReducer } from 'reduxsauce';
import { CURRENTUSER } from 'actions/constants';

export const INITIAL_STATE = fromJS({
  info: {},
  isLoading: false,
});

export const onLoginRequest = state => state.setIn(['isLoading'], true);

export const onLoginSuccess = (state, { payload }) =>
  state.setIn(['isLoading'], false).setIn(['info'], fromJS(payload));

export const onReset = state => {
  Cookie.remove('accessToken');
  return state.setIn(['isLoading'], false).setIn(['info'], fromJS({}));
};

export const onCallbackSuccess = (state, { payload = {} }) => {
  if (!payload) {
    return state;
  }

  Cookie.set('accessToken', payload.idToken);
  return state
    .setIn(['isLoading'], false)
    .setIn(['info'], fromJS({ ...payload, uid: payload.idToken }));
};

export const ACTION_HANDLERS = {
  [CURRENTUSER.LOGIN_REQUEST]: onLoginRequest,
  [CURRENTUSER.LOGIN_SUCCESS]: onLoginSuccess,
  [CURRENTUSER.LOGIN_FAILURE]: onReset,
  [CURRENTUSER.LOGOUT_FAILURE]: onReset,
  [CURRENTUSER.LOGOUT_SUCCESS]: onReset,
  [CURRENTUSER.CALLBACK_SUCCESS]: onReset,
  [CURRENTUSER.CALLBACK_SUCCESS]: onCallbackSuccess,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
