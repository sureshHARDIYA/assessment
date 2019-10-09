import * as AGENT from 'actions/agent';
import { call, put, getContext } from 'redux-saga/effects';
import getAgent from '../graphiql/get-agents.graphql';

export function* onSearchRequest(action) {
  try {
    const client = yield getContext('client');
    const { data } = yield call(client.query, {
      query: getAgent,
      ...(action.options || {}),
    });
    yield put(AGENT.onSearchSuccess({ payload: data.contactsByCustomerType }));
    action.cb && (yield call(action.cb, data.contactsByCustomerType));
  } catch (error) {
    console.log(error);
    yield put(AGENT.onSearchFailure({ error }));
    action.cb && (yield call(action.cb, null, error));
  }
}
