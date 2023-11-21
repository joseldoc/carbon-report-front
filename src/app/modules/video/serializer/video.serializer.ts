import {Injectable} from '@angular/core';
import {VideoInterface} from '../model/video.interface';

@Injectable({
  providedIn: 'root'
})
export class VideoSerializer {
  fromJson(json: any): VideoInterface {
    return {
      id: json.id,
      name: json.name,
      duration: json.duration,
      size: json.size,
      video_quality: json.video_quality
    }
  }
}
