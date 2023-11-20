import {createReducer, on} from '@ngrx/store';
import {MENU_NAVIGATION} from './data';
import {NavigationState} from './navigation.state';
import {NavigationActions} from './navigation.action';
import {MenuItem} from 'primeng/api';

export namespace NavigationReducer {

  export const initialState: NavigationState = {
    menus: MENU_NAVIGATION
  }

  export const _reducer = createReducer(
    initialState,
    on(NavigationActions.navigation, (state) => {
      return state;
    }),
    on(NavigationActions.setNavigation, (state, {item}) => {
      return {
        ...state,
        menus: state.menus.map((elt: MenuItem) => {
          return {...elt, visible: elt.id === item.id}
        })
      }
    })
  );
}
