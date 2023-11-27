import {createAction, props} from '@ngrx/store';
import {ReportInterface} from '../model/report.interface';
import {InputFormReportInterface, InputFormReportItem} from '../model/input-form-report.interface';

export namespace ReportActions {

  export enum ReportActionsType {
    // List
    LIST_REPORT_INVOKE = '[REPORT] LIST_INVOKE',
    LIST_REPORT_SUCCESS = '[REPORT] LIST_SUCCESS',
    LIST_REPORT_ERROR = '[REPORT] LIST_ERROR',

    ADD_REPORT_INVOKE = '[REPORT] ADD_INVOKE',
    ADD_REPORT_SUCCESS = '[REPORT] ADD_SUCCESS',
    ADD_REPORT_ERROR = '[REPORT] ADD_ERROR',

    ADD_INPUT_FORM_INVOKE = '[REPORT] ADD_INPUT_FORM_INVOKE',
    REMOVE_INPUT_FORM_SUCCESS = '[REPORT] REMOVE_INPUT_FORM_SUCCESS',
  }

  export const listReport = createAction(
    ReportActionsType.LIST_REPORT_INVOKE
  );
  export const listReportSuccess = createAction(
    ReportActionsType.LIST_REPORT_SUCCESS,
    props<{ reports: ReportInterface[] }>()
  );
  export const listReportError = createAction(
    ReportActionsType.LIST_REPORT_ERROR,
    props<{ error: string }>()
  );

  export const addInputForm = createAction(
    ReportActionsType.ADD_INPUT_FORM_INVOKE,
    props<{ payload: InputFormReportItem }>()
  );
  export const removeInputForm = createAction(
    ReportActionsType.REMOVE_INPUT_FORM_SUCCESS,
    props<{ payload: InputFormReportItem }>()
  );

  export const addReport = createAction(
    ReportActionsType.ADD_REPORT_INVOKE,
    props<{ report: InputFormReportInterface }>()
  );
  export const addReportSuccess = createAction(
    ReportActionsType.ADD_REPORT_SUCCESS,
    props<{ report: ReportInterface }>()
  );
  export const addReportError = createAction(
    ReportActionsType.ADD_REPORT_ERROR,
    props<{ error: string }>()
  );
}
