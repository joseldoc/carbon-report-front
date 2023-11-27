import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, concatMap, mergeMap} from 'rxjs';
import {LoadAction} from '../../../shared/store/load';
import {GENERAL_DATA_CONST} from '../../../shared/constant/data.constant';
import {ReportState} from './report.state';
import {ReportService} from '../service/report.service';
import {ReportActions} from './report.action';
import {ReportInterface} from '../model/report.interface';
import {InputFormReportInterface} from '../model/input-form-report.interface';

@Injectable()
export class ReportEffect {

  constructor(
    private _store: Store<ReportState>,
    private _action$: Actions,
    private _service: ReportService
  ) {
  }

  list$ = createEffect(() => {
    return this._action$.pipe(
      ofType(ReportActions.ReportActionsType.LIST_REPORT_INVOKE),
      mergeMap((data: { type: ReportActions.ReportActionsType.LIST_REPORT_INVOKE }) => {
          this._store.dispatch(LoadAction.load());
          return this._service.list()
            .pipe(
              concatMap((reports: ReportInterface[]) => ([LoadAction.load(), ReportActions.listReportSuccess({reports})])),
              catchError(() => ([LoadAction.load(), ReportActions.listReportError({error: GENERAL_DATA_CONST.error.errorFetchList})]))
            )
        }
      )
    )
  }, {dispatch: true})

  add$ = createEffect(() => {
    return this._action$.pipe(
      ofType(ReportActions.ReportActionsType.ADD_REPORT_INVOKE),
      mergeMap((data: { type: ReportActions.ReportActionsType.ADD_REPORT_INVOKE, report: InputFormReportInterface }) => {
          this._store.dispatch(LoadAction.load());
          return this._service.create(data.report)
            .pipe(
              concatMap((report: ReportInterface) => ([LoadAction.load(), ReportActions.addReportSuccess({report})])),
              catchError(() => ([LoadAction.load(), ReportActions.addReportError({error: GENERAL_DATA_CONST.error.errorFetchList})]))
            )
        }
      )
    )
  }, {dispatch: true})

}
