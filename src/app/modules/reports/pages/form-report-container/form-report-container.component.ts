import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject, takeUntil} from 'rxjs';
import {VideoInterface} from '../../../video/model/video.interface';
import {DataSelectInterface} from '../../../../shared/model/data-select.interface';
import {FormActionsEnum} from '../../../../shared/enums/form-action.enum';
import {select, Store} from '@ngrx/store';
import {selectVideos, VideoActions} from '../../../video/store';
import {selectLoading} from '../../../../shared/store/load';
import {FolderInterface} from '../../../folder/model/folder.interface';
import {FolderActions, selectFolders} from '../../../folder/store';

@Component({
  selector: 'app-form-report-container',
  templateUrl: './form-report-container.component.html',
  styleUrls: ['./form-report-container.component.css']
})
export class FormReportContainerComponent implements OnInit, OnDestroy {

  //streams
  videos$: Observable<ReadonlyArray<VideoInterface>> = this._store.pipe(select(selectVideos));
  videos: DataSelectInterface[] = [];
  folders$: Observable<ReadonlyArray<FolderInterface>> = this._store.pipe(select(selectFolders));
  folders: DataSelectInterface[] = [];
  destroyed$: Subject<void> = new Subject<void>();

  loading$: Observable<boolean> = this._store.pipe(select(selectLoading));
  loading: boolean;

  constructor(private _store: Store) {
    this.getVideos();
    this.getFolders();
  }

  ngOnInit() {
    this.loading$.pipe(
      takeUntil(this.destroyed$)
    ).subscribe((result) => {
      this.loading = result;
    })
  }

  getVideos(): void {
    this._store.dispatch(FolderActions.listFolder());
    this.videos$.pipe(
      takeUntil(this.destroyed$)
    ).subscribe((result: ReadonlyArray<VideoInterface>) => {
      this.videos = this.formatObservableToDataSelect([...result]);
    });
  }

  getFolders(): void {
    this._store.dispatch(VideoActions.listVideo());
    this.folders$.pipe(
      takeUntil(this.destroyed$)
    ).subscribe((result: ReadonlyArray<FolderInterface>) => {
      this.folders = this.formatObservableToDataSelect([...result]);
    });
  }

  formatObservableToDataSelect(datas: any): DataSelectInterface[] {
    return datas.map((data: any) => {
      return {
        code: data.id,
        name: data.name
      }
    })
  }

  formAction(data: { value: any, action: FormActionsEnum }): void {
    switch (data.action) {
      case  FormActionsEnum.GENERATE:
        // Generate report here
        return;
    }
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
