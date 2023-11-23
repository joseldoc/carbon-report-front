import {Component, OnDestroy, OnInit} from '@angular/core';
import {map, Observable, Subject, takeUntil} from 'rxjs';
import {VideoInterface} from '../../../video/model/video.interface';
import {VideoService} from '../../../video/service/video.service';
import {DataSelectInterface} from '../../../../shared/model/data-select.interface';
import {FormActionsEnum} from '../../../../shared/enums/form-action.enum';

@Component({
  selector: 'app-form-report-container',
  templateUrl: './form-report-container.component.html',
  styleUrls: ['./form-report-container.component.css']
})
export class FormReportContainerComponent implements OnInit, OnDestroy {

  videos$: Observable<VideoInterface[]>;
  videos: DataSelectInterface[];
  destroyed$: Subject<void> = new Subject<void>();

  constructor(private _service: VideoService) {
  }

  ngOnInit() {
    this.getVideos();
  }

  getVideos(): void {
    this.videos$ = this._service.list();
    this.videos$.pipe(
      takeUntil(this.destroyed$)
    ).subscribe((result: VideoInterface[]) => {
      this.videos = this.formatObservableToDataSelect(result);
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
