import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ReportState} from './report.state';

export const REPORT_STATE_NAME = 'reports';
export const ReportSelector = createFeatureSelector<ReportState>(REPORT_STATE_NAME);
export const selectReports = createSelector(ReportSelector, ({reports}: ReportState) => {
  return reports;
});
export const selectInputFormReport = createSelector(ReportSelector, ({inputFormReport}: ReportState) => {
  return inputFormReport;
});
export const selectErrorReport = createSelector(ReportSelector, ({error}: ReportState) => {
  return error;
})
