import { combineReducers } from 'redux-immutable';
import { reducer as formReducer } from 'redux-form/immutable';

import app from './app';
import currentUser from './currentUser';

export default combineReducers({
  app,
  currentUser,
  form: formReducer,
});
