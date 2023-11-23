import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {VideoInterface} from '../../model/video.interface';
import {ColumnTableInterface} from '../../../../shared/model/column.interface';
import {DataActionEmitInterface} from '../../../../core/data-table/data-action-emit.interface';
import {GENERAL_DATA_CONST} from '../../../../shared/constant/data.constant';
import {ActionTableEnum} from '../../../../core/data-table/action-table.enum';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoListComponent {

  @Input() videos: VideoInterface[];
  @Input() headers: ColumnTableInterface<VideoInterface>[];
  @Output() videoAction = new EventEmitter<DataActionEmitInterface<VideoInterface>>();
  selectedVideos: VideoInterface[] = [];
  dataConst = GENERAL_DATA_CONST;


  constructor() {
  }

  selectElement(data: any) {
    this.selectedVideos = data;
  }

  emitGenerateValue() {
    this.videoAction.emit({
      data: this.selectedVideos,
      action: ActionTableEnum.CARBON_GENERATE
    })
  }
}
