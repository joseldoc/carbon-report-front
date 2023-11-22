import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions} from '@ngrx/effects';
import {VideoService} from '../service/video.service';
import {VideoState} from './video.state';

@Injectable()
export class VideoEffect {

  constructor(
    private _store: Store<VideoState>,
    private _action$: Actions,
    private _videoService: VideoService
  ) {
  }

  /*list$ = createEffect(() => {
    return this._action$.pipe(
      ofType(VideoActions.VideoActionsType.LIST_VIDEO_INVOKE),
      mergeMap((data: { type: VideoActions.VideoActionsType.LIST_VIDEO_INVOKE }) => {
        return this._videoService.list()
          .pipe(
            map(videos => VideoActions.listVideoSuccess({videos})),
            catchError(() => VideoActions.listVideoError({error: ''}))
          )
      })
    )
  }, {dispatch: true})*/
}
