import { createStore, applyMiddleware } from 'redux';
import { fromJS } from 'immutable';
import createSagaMiddleware from 'redux-saga';
import sagas from 'sagas';
import reducers from 'reducers';

const sagaMiddleware = createSagaMiddleware();

export default (client, initialState = {}) => {
  const store = createStore(
    reducers,
    fromJS(initialState),
    applyMiddleware(sagaMiddleware)
  );

  store.runSaga = sagaMiddleware.run;
  store.runSaga(sagas(client));

  return store;
};
