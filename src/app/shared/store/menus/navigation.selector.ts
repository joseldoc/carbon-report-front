import {createFeatureSelector, createSelector} from '@ngrx/store';
import {NavigationState} from './navigation.state';
import {MenuItem} from 'primeng/api';

export const NAVIGATION_STATE = 'navigations';

export const navigationSelector = createFeatureSelector<NavigationState>(NAVIGATION_STATE);
export const selectNavigations = createSelector(navigationSelector, ({menus}: NavigationState) => {
  return menus;
});

export const selectActiveMenu = createSelector(navigationSelector, ({menus}: NavigationState) => {
  return menus.find((elt: MenuItem) => elt.visible);
})
