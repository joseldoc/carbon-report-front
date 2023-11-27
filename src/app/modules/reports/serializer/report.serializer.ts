import {Injectable} from '@angular/core';
import {ReportInterface} from '../model/report.interface';

@Injectable({
  providedIn: 'root'
})
export class ReportSerializer {
  fromJson(json: any): ReportInterface {
    return {
      id: json.id,
      videos: json.videos,
      mode: json.mode,
      createdAt: json.createdAt
    }
  }
}
