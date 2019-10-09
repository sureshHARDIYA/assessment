import { call, put, getContext } from 'redux-saga/effects';
import * as TODO from 'actions/todo';
import getTodos from '../graphiql/get-totos.graphql';

export function* onSearchRequest(action) {
  try {
    const client = yield getContext('client');
    const { data } = yield call(client.query, {
      query: getTodos,
      ...(action.options || {}),
    });

    yield put(TODO.onSearchSuccess({ payload: data.allTodos }));
    action.cb && (yield call(action.cb, null));
  } catch (error) {
    yield put(TODO.onSearchFailure({ error }));
    action.cb && (yield call(action.cb, null, error));
  }
}
