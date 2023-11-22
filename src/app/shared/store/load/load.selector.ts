import {createFeatureSelector, createSelector} from '@ngrx/store';
import {LoadReducer} from './load.reducer';

export const LOAD_STATE_NAME = 'loads';
export const loadSelector = createFeatureSelector<LoadReducer.loadState>(LOAD_STATE_NAME);

export const selectLoading = createSelector(loadSelector, ({loading}: LoadReducer.loadState) => {
  return loading;
})
