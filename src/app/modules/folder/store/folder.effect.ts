import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, concatMap, mergeMap} from 'rxjs';
import {LoadAction} from '../../../shared/store/load';
import {GENERAL_DATA_CONST} from '../../../shared/constant/data.constant';
import {FolderState} from './folder.state';
import {FolderService} from '../service/folder.service';
import {FolderActions} from './folder.action';
import {FolderInterface} from '../model/folder.interface';

@Injectable()
export class FolderEffect {

  constructor(
    private _store: Store<FolderState>,
    private _action$: Actions,
    private _folderService: FolderService
  ) {
  }

  list$ = createEffect(() => {
    return this._action$.pipe(
      ofType(FolderActions.FolderActionsType.LIST_FOLDER_INVOKE),
      mergeMap((data: { type: FolderActions.FolderActionsType.LIST_FOLDER_INVOKE }) => {
          this._store.dispatch(LoadAction.load());
          return this._folderService.list()
            .pipe(
              concatMap((folders: FolderInterface[]) => ([LoadAction.load(), FolderActions.listFolderSuccess({folders})])),
              catchError(() => ([LoadAction.load(), FolderActions.listFolderError({error: GENERAL_DATA_CONST.error.errorFetchList})]))
            )
        }
      )
    )
  }, {dispatch: true})
}
