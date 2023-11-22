import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {VideoInterface} from '../../model/video.interface';
import {ColumnTableInterface} from '../../../../shared/model/column.interface';
import {DataActionEmitInterface} from '../../../../core/data-table/data-action-emit.interface';
import {GENERAL_DATA_CONST} from '../../../../shared/constant/data.constant';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoListComponent {

  @Input() videos: VideoInterface[];
  @Input() headers: ColumnTableInterface<VideoInterface>[];
  @Output() video = new EventEmitter<DataActionEmitInterface<VideoInterface>>();

  dataConst = GENERAL_DATA_CONST;

  constructor() {
  }

  selectElement(data: any) {
    // emit actions from
    this.video.emit({
      data: data.element,
      action: data.action
    });
  }
}
