import {createAction, props} from '@ngrx/store';
import {VideoInterface} from '../model/video.interface';

export namespace VideoActions {

  export enum VideoActionsType {
    // list
    LIST_VIDEO = '[VIDEO] LIST_INVOKE',
    LIST_VIDEO_SUCCESS = '[VIDEO] LIST_SUCCESS',
    LIST_VIDEO_ERROR = '[VIDEO] LIST_ERROR',
    // get element
    GET_VIDEO = '[VIDEO] GET_INVOKE',
    GET_VIDEO_SUCCESS = '[VIDEO] GET_SUCCESS',
    GET_VIDEO_ERROR = '[VIDEO] GET_ERROR'
  }

  export const listVideo = createAction(
    VideoActionsType.LIST_VIDEO
  );
  export const listVideoSuccess = createAction(
    VideoActionsType.LIST_VIDEO_SUCCESS,
    props<{ videos: VideoInterface }>()
  );
  export const listVideoSuccess = createAction(
    VideoActionsType.LIST_VIDEO_ERROR,
    props<{ error: string }>()
  );

  export const getVideo = createAction(
    VideoActionsType.GET_VIDEO,
    props<{ video: VideoInterface }>()
  );
  export const getVideoSuccess = createAction(
    VideoActionsType.GET_VIDEO_SUCCESS,
    props<{ video: VideoInterface }>()
  );
  export const getVideoError = createAction(
    VideoActionsType.GET_VIDEO_ERROR,
    props<{ error: string }>()
  );
}
