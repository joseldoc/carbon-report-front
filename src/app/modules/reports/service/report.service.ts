import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AbstractService} from '../../../shared/service/abstract.service';
import {ReportInterface} from '../model/report.interface';
import {ReportSerializer} from '../serializer/report.serializer';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {InputFormReportInterface} from '../model/input-form-report.interface';

@Injectable({
  providedIn: 'root'
})
export class ReportService extends AbstractService<ReportInterface> {
  constructor(
    private http: HttpClient,
    private rSerializer: ReportSerializer
  ) {
    super(
      http,
      rSerializer
    );
    this.endpoint = 'reports'
  }

  create(payload: InputFormReportInterface): Observable<ReportInterface> {
    return this.http.post<ReportInterface>(`${environment.urlApi}${this.endpoint}`, payload);
  }
}
