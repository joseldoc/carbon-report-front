import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject, takeUntil} from 'rxjs';
import {VideoInterface} from '../../../video/model/video.interface';
import {DataSelectInterface} from '../../../../shared/model/data-select.interface';
import {FormActionsEnum} from '../../../../shared/enums/form-action.enum';
import {select, Store} from '@ngrx/store';
import {selectVideos, VideoActions, VideoState} from '../../../video/store';
import {selectLoading} from '../../../../shared/store/load';

@Component({
  selector: 'app-form-report-container',
  templateUrl: './form-report-container.component.html',
  styleUrls: ['./form-report-container.component.css']
})
export class FormReportContainerComponent implements OnInit, OnDestroy {

  videos$: Observable<ReadonlyArray<VideoInterface>> = this._store.pipe(select(selectVideos));
  videos: DataSelectInterface[];
  destroyed$: Subject<void> = new Subject<void>();

  loading$: Observable<boolean> = this._store.pipe(select(selectLoading));
  loading: boolean;

  constructor(private _store: Store<VideoState>) {
  }

  ngOnInit() {
    this.loading$.pipe(
      takeUntil(this.destroyed$)
    ).subscribe((result) => {
      this.loading = result;
    })
    this.getVideos();
  }

  getVideos(): void {
    this._store.dispatch(VideoActions.listVideo());
    this.videos$.pipe(
      takeUntil(this.destroyed$)
    ).subscribe((result: ReadonlyArray<VideoInterface>) => {
      if (result.length != 0) {
        this.videos = this.formatObservableToDataSelect([...result]);
      }
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
        // generate report here
        return;
    }
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
