import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ListVideoContainerComponent} from './pages/list-video-container/list-video-container.component';
import {CommonModule} from '@angular/common';
import {VideoRoutingModule} from './video-routing.module';
import {VideoListComponent} from './components/video-list/video-list.component';
import {DataTableComponent} from '../../core/data-table/data-table.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    ListVideoContainerComponent,
    VideoListComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    VideoRoutingModule,
    // table
    TableModule,
    DataTableComponent,
    ButtonModule
  ]
})

export class VideoModule {
}
