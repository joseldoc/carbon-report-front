import {VideoInterface} from '../model/video.interface';

export interface VideoState {
  videos: VideoInterface[],
  error: string
}
