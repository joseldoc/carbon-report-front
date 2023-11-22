import {VideoInterface} from '../model/video.interface';

export interface VideoState {
  videos: ReadonlyArray<VideoInterface>,
  selected: VideoInterface | null,
  error: string
}
