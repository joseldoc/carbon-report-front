import {NAVIGATION_STATE, NavigationReducer, NavigationState} from './menus';
import {ActionReducerMap} from '@ngrx/store';
import {LOAD_STATE_NAME, LoadReducer} from './load';

export interface AppState {
  [NAVIGATION_STATE]: NavigationState
  [LOAD_STATE_NAME]: LoadReducer.loadState
}

export const appReducer: ActionReducerMap<AppState> = {
  [NAVIGATION_STATE]: NavigationReducer._reducer,
  [LOAD_STATE_NAME]: LoadReducer.reducer,
}
