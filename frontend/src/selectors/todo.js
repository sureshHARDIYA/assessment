import { createSelector } from 'reselect';

export const reducer = state => state.get('todo');

export const getList = () =>
  createSelector(
    reducer,
    state => state.get('list').toJS()
  );
