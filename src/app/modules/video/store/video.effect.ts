import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {VideoService} from '../service/video.service';
import {VideoState} from './video.state';
import {catchError, concatMap, mergeMap} from 'rxjs';
import {VideoActions} from './video.actions';
import {LoadAction} from '../../../shared/store/load';
import {VideoInterface} from '../model/video.interface';
import {GENERAL_DATA_CONST} from '../../../shared/constant/data.constant';

@Injectable()
export class VideoEffect {

  constructor(
    private _store: Store<VideoState>,
    private _action$: Actions,
    private _videoService: VideoService
  ) {
  }

  list$ = createEffect(() => {
    return this._action$.pipe(
      ofType(VideoActions.VideoActionsType.LIST_VIDEO_INVOKE),
      mergeMap((data: { type: VideoActions.VideoActionsType.LIST_VIDEO_INVOKE }) => {
          this._store.dispatch(LoadAction.load());
          return this._videoService.list()
            .pipe(
              concatMap((videos: VideoInterface[]) => ([LoadAction.load(), VideoActions.listVideoSuccess({videos})])),
              catchError(() => ([LoadAction.load(), VideoActions.listVideoError({error: GENERAL_DATA_CONST.error.errorFetchList})]))
            )
        }
      )
    )
  }, {dispatch: true})
}
