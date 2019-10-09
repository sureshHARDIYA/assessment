import { APP } from './constants';

export const onLoadingRequest = (params = {}) => ({
  type: APP.LOADING_REQUEST,
  ...params,
});

export const onLeftMenuRequest = (params = {}) => ({
  type: APP.LEFTMENU_KEYS_REQUEST,
  ...params,
});

export const onLeftSwitchRequest = (params = {}) => ({
  type: APP.LEFTMENU_SWITCH_REQUEST,
  ...params,
});

export const onLeftPopverRequest = (params = {}) => ({
  type: APP.LEFTMENU_POPVER_REQUEST,
  ...params,
});
