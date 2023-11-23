import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject, takeUntil} from 'rxjs';
import {VideoInterface} from '../../model/video.interface';
import {ColumnTableInterface} from '../../../../shared/model/column.interface';
import {DataActionEmitInterface} from '../../../../core/data-table/data-action-emit.interface';
import {selectVideos, VideoActions, VideoState} from '../../store';
import {select, Store} from '@ngrx/store';
import {selectLoading} from '../../../../shared/store/load';

@Component({
  selector: 'app-list-video-container',
  templateUrl: './list-video-container.component.html',
  styleUrls: ['./list-video-container.component.css'],
})
export class ListVideoContainerComponent implements OnInit, OnDestroy {
  // streams
  videos$: Observable<ReadonlyArray<VideoInterface>> = this._store.pipe(select(selectVideos));
  videos: VideoInterface[];
  destroyed$: Subject<void> = new Subject<void>();

  headers: ColumnTableInterface<VideoInterface>[] = [
    {headerName: 'Nom', fieldName: 'name', isModelProperty: true},
    {headerName: 'Duration', fieldName: 'duration', isModelProperty: true},
    {headerName: 'Size', fieldName: 'size', isModelProperty: true},
    {headerName: 'Qualité', fieldName: 'video_quality', isModelProperty: true},
  ];

  loading$: Observable<boolean> = this._store.pipe(select(selectLoading));

  constructor(private _store: Store<VideoState>) {
  }

  ngOnInit() {
    this.getVideos();
  }

  getVideos(): void {
    this._store.dispatch(VideoActions.listVideo());
    this.videos$.pipe(
      takeUntil(this.destroyed$)
    ).subscribe((result: ReadonlyArray<VideoInterface>) => {
      this.videos = [...result];
    });
  }

  onSelectElement(event: DataActionEmitInterface<VideoInterface>): void {
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

}
