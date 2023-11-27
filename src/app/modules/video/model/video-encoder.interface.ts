import {VideoInterface} from './video.interface';
import {ResourceInterface} from '../../../shared/model/resource.interface';

export interface VideoEncoderInterface extends ResourceInterface {
  video?: VideoInterface;
  size: string;
  quality: string;
}
