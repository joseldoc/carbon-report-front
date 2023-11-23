import {Component, OnDestroy, OnInit} from '@angular/core';
import {VideoService} from '../../service/video.service';
import {Observable, Subject, takeUntil} from 'rxjs';
import {VideoInterface} from '../../model/video.interface';
import {ColumnTableInterface} from '../../../../shared/model/column.interface';
import {DataActionEmitInterface} from '../../../../core/data-table/data-action-emit.interface';

@Component({
  selector: 'app-list-video-container',
  templateUrl: './list-video-container.component.html',
  styleUrls: ['./list-video-container.component.css'],
})
export class ListVideoContainerComponent implements OnInit, OnDestroy {
  // streams
  videos$: Observable<VideoInterface[]>;
  videos: VideoInterface[];
  destroyed$: Subject<void> = new Subject<void>();

  headers: ColumnTableInterface<VideoInterface>[] = [
    {headerName: 'Nom', fieldName: 'name', isModelProperty: true},
    {headerName: 'Duration', fieldName: 'duration', isModelProperty: true},
    {headerName: 'Size', fieldName: 'size', isModelProperty: true},
    {headerName: 'Qualité', fieldName: 'video_quality', isModelProperty: true},
  ];

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
      this.videos = result;
    });
  }

  onSelectElement(event: DataActionEmitInterface<VideoInterface>): void {
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

}
