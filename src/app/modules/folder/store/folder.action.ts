import {createAction, props} from '@ngrx/store';
import {FolderInterface} from '../model/folder.interface';


export namespace FolderActions {

  export enum FolderActionsType {
    // List
    LIST_FOLDER_INVOKE = '[FOLDER] LIST_INVOKE',
    LIST_FOLDER_SUCCESS = '[FOLDER] LIST_SUCCESS',
    LIST_FOLDER_ERROR = '[FOLDER] LIST_ERROR',
  }

  export const listFolder = createAction(
    FolderActionsType.LIST_FOLDER_INVOKE
  );
  export const listFolderSuccess = createAction(
    FolderActionsType.LIST_FOLDER_SUCCESS,
    props<{ folders: FolderInterface[] }>()
  );
  export const listFolderError = createAction(
    FolderActionsType.LIST_FOLDER_ERROR,
    props<{ error: string }>()
  );
}
