import { fromJS } from 'immutable';
import { createReducer } from 'reduxsauce';
import { APP } from 'actions/constants';

const prefix = 'TRANSACTION_';

export const INITIAL_STATE = fromJS({
  loading: false,
  darkTheme: true,
  menuPopoverVisible: false,
  isNavbar: document.body.clientWidth < 769,
  navOpenKeys:
    JSON.parse(window.localStorage.getItem(`${prefix}navOpenKeys`)) || [],
  siderFold: window.localStorage.getItem(`${prefix}siderFold`) === 'true',
});

export const onLoading = (state, { loading }) => state.set('loading', loading);

export const onSwitchSider = state =>
  state.set('siderFold', !state.get('siderFold'));

export const onChangeOpenKeys = (state, { payload = {} }) => {
  window.localStorage.setItem(
    `${prefix}navOpenKeys`,
    JSON.stringify(payload.navOpenKeys)
  );
  return state.set('navOpenKeys', fromJS(payload.navOpenKeys));
};

export const onSwitchMenuPopver = state =>
  state.set('menuPopoverVisible', !state.get('menuPopoverVisible'));

export const ACTION_HANDLERS = {
  [APP.LOADING_REQUEST]: onLoading,
  [APP.LEFTMENU_KEYS_REQUEST]: onChangeOpenKeys,
  [APP.LEFTMENU_SWITCH_REQUEST]: onSwitchSider,
  [APP.LEFTMENU_POPVER_REQUEST]: onSwitchMenuPopver,
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
