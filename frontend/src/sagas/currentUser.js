// import Cookie from 'js-cookie';
import { call, put, getContext } from 'redux-saga/effects';
import * as CURRENTUSER from 'actions/currentUser';
// import history from 'pages/history';
// import Auth from 'helpers/auth';
import getCurrentUser from '../graphiql/getCurrentUser.graphql';

export function* onLoginRequest(action) {
  try {
    const client = yield getContext('client');
    const { data } = yield call(client.mutate, {
      mutation: getCurrentUser,
      ...(action.options || {}),
    });
    console.log(data);

    action.cb && (yield call(action.cb, data.contactsByCustomerType));
  } catch (error) {
    console.log(error, 'see...');
    yield put(CURRENTUSER.onLoginFailure({ error }));
  }
}

// export function* onLogoutRequest() {
//   try {
//     Cookie.remove('accessToken');
//     yield Auth.logout();
//     yield put(CURRENTUSER.onLogoutSuccess());
//   } catch (error) {
//     yield put(CURRENTUSER.onLogoutFailure({ error }));
//   }
// }
//
// export function* onCallbackRequest() {
//   try {
//     const payload = yield Auth.handleAuth();
//     yield put(CURRENTUSER.onCallbackSuccess({ payload }));
//     history.push('/');
//   } catch (error) {
//     yield put(CURRENTUSER.onCallbackFailure({ error }));
//     history.push('/');
//   }
// }
//
// export function* onRenewRequest({ cb }) {
//   try {
//     const payload = yield Auth.renewSession();
//     yield put(CURRENTUSER.onCallbackSuccess({ payload }));
//     // history.push('/');
//     cb && cb();
//   } catch (error) {
//     yield put(CURRENTUSER.onCallbackFailure({ error }));
//     // history.push('/');
//     cb && cb();
//   }
// }
