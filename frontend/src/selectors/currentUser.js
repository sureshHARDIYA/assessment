import { createSelector } from 'reselect';

export const reducer = state => state.get('currentUser');

export const isLoaded = () =>
  createSelector(
    reducer,
    state => state.get('isLoaded')
  );

export const getUser = () =>
  createSelector(
    reducer,
    state => (state.get('info') ? state.get('info').toJS() : {})
  );
