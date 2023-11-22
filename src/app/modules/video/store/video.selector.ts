import {createFeatureSelector, createSelector} from '@ngrx/store';
import {VideoState} from './video.state';

export const VIDEO_STATE_NAME = 'videos';
export const VideoSelector = createFeatureSelector<VideoState>(VIDEO_STATE_NAME);
export const selectVideos = createSelector(VideoSelector, ({videos}: VideoState) => {
  return videos;
});
export const selectSelectedVideo = createSelector(VideoSelector, ({selected}: VideoState) => {
  return selected;
});
export const selectErrorVideo = createSelector(VideoSelector, ({error}: VideoState) => {
  return error;
})
