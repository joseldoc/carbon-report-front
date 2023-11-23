import {createAction, props} from '@ngrx/store';
import {MenuItem} from 'primeng/api';

export namespace NavigationActions {

  export enum NavigationActionsType {
    NAVIGATION = '[MENU] INVOKE',
    SET_NAVIGATION = '[MENU] SET'
  }

  export const navigation = createAction(
    NavigationActionsType.NAVIGATION
  );
  export const setNavigation = createAction(
    NavigationActionsType.SET_NAVIGATION,
    props<{ item: MenuItem }>()
  );
}


