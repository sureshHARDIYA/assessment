import * as CUSTOMER from 'actions/customer';
import { call, put, getContext } from 'redux-saga/effects';
import getCustomers from '../graphiql/get-customers.graphql';

export function* onSearchRequest(action) {
  try {
    const client = yield getContext('client');
    const { data } = yield call(client.query, {
      query: getCustomers,
      ...(action.options || {}),
    });
    yield put(
      CUSTOMER.onSearchSuccess({ payload: data.contactsByCustomerType })
    );
    action.cb && (yield call(action.cb, data.contactsByCustomerType));
  } catch (error) {
    console.log(error);
    yield put(CUSTOMER.onSearchFailure({ error }));
    action.cb && (yield call(action.cb, null, error));
  }
}
