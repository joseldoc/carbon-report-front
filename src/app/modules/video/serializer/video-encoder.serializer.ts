import {Injectable} from '@angular/core';
import {VideoEncoderInterface} from '../model/video-encoder.interface';

@Injectable({
  providedIn: 'root'
})
export class VideoEncoderSerializer {
  fromJson(json: any): VideoEncoderInterface {
    return {
      id: json.id,
      size: json.size,
      video: json.video,
      quality: json.quality,
    }
  }
}
