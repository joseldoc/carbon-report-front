import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {VideoEncoderSerializer} from '../serializer/video-encoder.serializer';
import {AbstractService} from '../../../shared/service/abstract.service';
import {VideoEncoderInterface} from '../model/video-encoder.interface';

@Injectable({
  providedIn: 'root'
})
export class VideoEncoderService extends AbstractService<VideoEncoderInterface> {
  constructor(
    private http: HttpClient,
    private vSerializer: VideoEncoderSerializer
  ) {
    super(
      http,
      vSerializer
    )
  }
}
