import {NAVIGATION_STATE, NavigationReducer, NavigationState} from './menus';
import {ActionReducerMap} from '@ngrx/store';

export interface AppState {
  [NAVIGATION_STATE]: NavigationState
}

export const appReducer: ActionReducerMap<AppState> = {
  [NAVIGATION_STATE]: NavigationReducer._reducer,
}
