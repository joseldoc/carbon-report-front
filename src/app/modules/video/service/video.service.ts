import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {VideoSerializer} from '../serializer/video.serializer';
import {VideoInterface} from '../model/video.interface';
import {AbstractService} from '../../../shared/service/abstract.service';

@Injectable({
  providedIn: 'root'
})
export class VideoService extends AbstractService<VideoInterface> {
  constructor(
    private http: HttpClient,
    private vSerializer: VideoSerializer
  ) {
    super(
      http,
      vSerializer
    );
    this.endpoint = 'videos'
  }
}
