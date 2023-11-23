import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ListVideoContainerComponent} from './pages/list-video-container/list-video-container.component';
import {CommonModule} from '@angular/common';
import {VideoRoutingModule} from './video-routing.module';
import {VideoListComponent} from './components/video-list/video-list.component';
import {DataTableComponent} from '../../core/data-table/data-table.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {EffectsModule} from '@ngrx/effects';
import {VIDEO_STATE_NAME, VideoEffect, VideoReducer} from './store';
import {StoreModule} from '@ngrx/store';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

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
    ButtonModule,
    ProgressSpinnerModule,
    // store
    EffectsModule.forFeature([VideoEffect]),
    StoreModule.forFeature(VIDEO_STATE_NAME, VideoReducer.reducer)
  ]
})

export class VideoModule {
}
