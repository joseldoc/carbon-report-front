import {VideoInterface} from '../../video/model/video.interface';

export interface InputFormReportInterface {
  view?: number;
  data: VideoInterface[] | Folder
}
