import {ModeReportEnum} from '../enums/mode-report.enum';

export interface InputFormReportInterface {
  data: InputFormReportItem[] // folder or Video
  mode: ModeReportEnum;
}

export interface InputFormReportItem {
  number_views: number;
  id: number;
}
