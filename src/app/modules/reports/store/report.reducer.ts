import {createReducer, on} from '@ngrx/store';
import {ReportActions} from './report.action';
import {ReportState} from './report.state';
import {InputFormReportItem} from '../model/input-form-report.interface';

export namespace ReportReducer {

  export const initialState: ReportState = {
    reports: [],
    inputFormReport: [],
    error: ''
  };

  export const reducer = createReducer(
    initialState,
    on(ReportActions.listReportSuccess, (state, {reports}) => {
      return {
        ...state,
        reports
      };
    }),
    on(ReportActions.addInputForm, (state, {payload}) => {
      return {
        ...state,
        inputFormReport: [...state.inputFormReport, payload]
      }
    }),
    on(ReportActions.removeInputForm, (state, {payload}) => {
      return {
        ...state,
        inputFormReport: state.inputFormReport.filter((elt: InputFormReportItem) => elt.id !== payload.id)
      }
    }),
    on(ReportActions.addReportSuccess, (state, {report}) => {
      return {
        ...state,
        reports: [...state.reports, report]
      }
    }),
    on(ReportActions.listReportError,
      ReportActions.listReportError,
      ReportActions.addReportError,
      (state, {error}) => {
        return {
          ...state,
          error
        }
      })
  )
}
