import { createSelector } from 'reselect';

export const reducer = state => state.get('agent');

export const getList = () =>
  createSelector(
    reducer,
    state => state.get('list').toJS()
  );

export const getIsLoading = () =>
  createSelector(
    reducer,
    state => state.get('isLoading')
  );
