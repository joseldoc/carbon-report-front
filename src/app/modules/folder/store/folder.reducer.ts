import {createReducer, on} from '@ngrx/store';
import {FolderState} from './folder.state';
import {FolderActions} from './folder.action';

export namespace FolderReducer {

  export const initialState: FolderState = {
    folders: [],
    error: ''
  };

  export const reducer = createReducer(
    initialState,
    on(FolderActions.listFolderSuccess, (state, {folders}) => {
      return {
        ...state,
        folders
      };
    }),
    on(FolderActions.listFolderError,
      (state, {error}) => {
        return {
          ...state,
          error
        }
      })
  )
}
