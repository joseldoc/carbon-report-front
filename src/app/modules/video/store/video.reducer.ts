import {VideoState} from './video.state';
import {VideoActions} from './video.actions';
import {createReducer, on} from '@ngrx/store';

export namespace VideoReducer {

  export const initialState: VideoState = {
    videos: [],
    selected: null,
    error: ''
  };

  export const reducer = createReducer(
    initialState,
    on(VideoActions.listVideoSuccess, (state, {videos}) => {
      return {
        ...state,
        videos
      };
    }),
    on(VideoActions.getVideoSuccess, (state, {video}) => {
      return {
        ...state,
        selected: video
      }
    }),
    on(VideoActions.listVideoError,
      VideoActions.getVideoError,
      (state, {error}) => {
        return {
          ...state,
          error
        }
      })
  )
}
