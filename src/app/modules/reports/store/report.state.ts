import {ReportInterface} from '../model/report.interface';
import {InputFormReportItem} from '../model/input-form-report.interface';

export interface ReportState {
  reports: ReadonlyArray<ReportInterface>;
  error: string;
  inputFormReport: InputFormReportItem[]
}
