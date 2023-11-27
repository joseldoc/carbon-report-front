import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable, Subject, takeUntil} from 'rxjs';
import {selectLoading} from '../../../../shared/store/load';
import {ReportInterface} from '../../model/report.interface';
import {selectVideos, VideoActions} from '../../../video/store';
import {VideoInterface} from '../../../video/model/video.interface';
import {DataSelectInterface} from '../../../../shared/model/data-select.interface';
import {FolderActions, selectFolders} from '../../../folder/store';
import {FolderInterface} from '../../../folder/model/folder.interface';
import {ReportActions, selectReports} from '../../store';
import {FormReportEnum, ListReportEnum} from '../../enums/report-page-action.enum';
import {InputFormReportInterface} from '../../model/input-form-report.interface';
import {ColumnTableInterface} from '../../../../shared/model/column.interface';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit, OnDestroy {
  // streams
  loading$: Observable<boolean> = this._store.pipe(select(selectLoading));
  reports$: Observable<ReadonlyArray<ReportInterface>> = this._store.pipe(select(selectReports));
  videos$: Observable<ReadonlyArray<VideoInterface>> = this._store.pipe(select(selectVideos));
  folders$: Observable<ReadonlyArray<FolderInterface>> = this._store.pipe(select(selectFolders));
  destroyed$: Subject<void> = new Subject<void>();

  loading: boolean;
  videos: DataSelectInterface[];
  folders: DataSelectInterface[];
  reports: ReportInterface[];

  columns: ColumnTableInterface<ReportInterface>[] = [
    {headerName: 'ID', fieldName: 'id', isModelProperty: true},
    {headerName: 'Mode Rapport', fieldName: 'mode', isModelProperty: true},
    {headerName: 'Date realisation', fieldName: 'createdAt', isModelProperty: true, isDate: true},
  ];

  constructor(private _store: Store) {

  }

  ngOnInit() {
    // laoding state
    this.getLoading();
    // videos state
    this.getVideos();
    this.getFolders();
    // Report state
    this.getReports();
  }

  getReports(): void {
    this._store.dispatch(ReportActions.listReport());
    this.reports$.pipe(
      takeUntil(this.destroyed$)
    ).subscribe((result: ReadonlyArray<ReportInterface>) => {
      this.reports = [...result];
    });
  }

  getVideos(): void {
    this._store.dispatch(VideoActions.listVideo());
    this.videos$.pipe(
      takeUntil(this.destroyed$)
    ).subscribe((result: ReadonlyArray<VideoInterface>) => {
      this.videos = ReportComponent.formatToDataSelect([...result], 'name');
    });
  }

  getFolders(): void {
    this._store.dispatch(FolderActions.listFolder());
    this.folders$.pipe(
      takeUntil(this.destroyed$)
    ).subscribe((result: ReadonlyArray<FolderInterface>) => {
      this.folders = ReportComponent.formatToDataSelect([...result], 'dossier');
    });
  }

  getLoading() {
    this.loading$.pipe(
      takeUntil(this.destroyed$)
    ).subscribe((result) => {
      this.loading = result;
    })
  }

  // actions
  formAction(data: { value: any; action: FormReportEnum }) {
    switch (data.action) {
      case  FormReportEnum.CREATE:
        // format object view
        const payload = {
          mode: 'VIDEO',
          data: data.value.fields.map((elt: any) => {
            return {
              id: elt.selectedVideos.code,
              number_views: elt.vue
            }
          })
        } as InputFormReportInterface
        this._store.dispatch(ReportActions.addReport({report: payload}));
        return;
      case FormReportEnum.REMOVE_INPUT_FORM:
        // remove selected element
        return;
    }
  }

  listAction(data: { value: any; action: ListReportEnum }) {
    switch (data.action) {
      case  ListReportEnum.GENERATE_EXCEL:
        // Generate csv file here
        return;
      case ListReportEnum.GENERATE_PDF:
        // generate pdf file report
        return;
    }

  }

  static filterUniqueObjects(array: any[], key: string): any[] {
    return array.filter((item, index, self: any[]) => {
      const normalizedKey = item[key].code.toLowerCase();
      return index === self.findIndex((t) => (
        t[key].code.toLowerCase() === normalizedKey
      ));
    });
  }

  static formatToDataSelect(data: any, keyName: string): DataSelectInterface[] {
    return data.map((data: any) => {
      return {
        code: data.id,
        name: data[keyName]
      }
    })
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
