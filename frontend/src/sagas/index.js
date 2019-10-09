import { takeLatest, setContext } from 'redux-saga/effects';
import { CURRENTUSER } from 'actions/constants';

import * as CURRENTUSERWATCHER from './currentUser';

export default client =>
  function* root() {
    yield setContext({ client });

    // yield takeLatest(CURRENTUSER.RENEW_REQUEST, CURRENTUSERWATCHER.onRenewRequest);
    yield takeLatest(
      CURRENTUSER.LOGIN_REQUEST,
      CURRENTUSERWATCHER.onLoginRequest
    );
    // yield takeLatest(CURRENTUSER.LOGOUT_REQUEST, CURRENTUSERWATCHER.onLogoutRequest);
    // yield takeLatest(CURRENTUSER.CALLBACK_REQUEST, CURRENTUSERWATCHER.onCallbackRequest);
  };
