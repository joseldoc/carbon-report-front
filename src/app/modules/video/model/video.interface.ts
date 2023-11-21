import {ResourceInterface} from '../../../shared/model/resource.interface';

export interface VideoInterface extends ResourceInterface {
  name: string;
  duration: number;
  size: number;
  video_quality: string;
}
