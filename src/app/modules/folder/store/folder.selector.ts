import {createFeatureSelector, createSelector} from '@ngrx/store';
import {FolderState} from './folder.state';

export const FOLDER_STATE_NAME = 'folders';
export const FolderSelector = createFeatureSelector<FolderState>(FOLDER_STATE_NAME);
export const selectFolders = createSelector(FolderSelector, ({folders}: FolderState) => {
  return folders;
});
export const selectErrorFolder = createSelector(FolderSelector, ({error}: FolderState) => {
  return error;
})
