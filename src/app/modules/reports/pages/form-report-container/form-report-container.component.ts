import {Component, OnDestroy, OnInit} from '@angular/core';
import {map, Observable, Subject, takeUntil} from 'rxjs';
import {VideoInterface} from '../../../video/model/video.interface';
import {DataSelectInterface} from '../../../../shared/model/data-select.interface';
import {FormActionsEnum} from '../../../../shared/enums/form-action.enum';
import {select, Store} from '@ngrx/store';
import {VideoActions, VideoState} from '../../../video/store';
import {selectLoading} from '../../../../shared/store/load';

@Component({
  selector: 'app-form-report-container',
  templateUrl: './form-report-container.component.html',
  styleUrls: ['./form-report-container.component.css']
})
export class FormReportContainerComponent implements OnInit, OnDestroy {

  videos$: Observable<VideoInterface[]>;
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
    this._store.dispatch(VideoActions.listVideo());
    this.getVideos();
  }

  getVideos(): void {
    this.videos$.pipe(
      takeUntil(this.destroyed$)
    ).subscribe((result: ReadonlyArray<VideoInterface>) => {
      this.videos = this.formatObservableToDataSelect([...result]);
    });
  }

  formatObservableToDataSelect(datas: any): DataSelectInterface[] {
    return datas.pipe(
      map((data: any[]) => {
        if (!data) return [];
        return data.map((elt) => {
          return {
            name: elt.name,
            code: elt.code
          }
        })
      })
    )
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
