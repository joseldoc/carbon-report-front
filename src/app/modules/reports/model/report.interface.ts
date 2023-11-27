import {ResourceInterface} from '../../../shared/model/resource.interface';
import {FolderInterface} from '../../folder/model/folder.interface';

export interface ReportInterface extends ResourceInterface {
  videos: VideoReportInterface[];
  mode?: string;
  createdAt?: Date;
}

export interface VideoReportInterface extends ResourceInterface {
  name: string;
  duration: number;
  size: string;
  video_quality: string;
  folders: FolderInterface[],
  encoder: {
    id: number;
    size: string;
    quality: string
    consume_carbon: number;
  },
  number_views: number;
  consume_carbon: number;
  earnCarbon: number;
  unit_price: string;
}
