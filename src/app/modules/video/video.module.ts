import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ListVideoContainerComponent} from './pages/list-video-container/list-video-container.component';
import {CommonModule} from '@angular/common';
import {VideoRoutingModule} from './video-routing.module';

@NgModule({
  declarations: [
    ListVideoContainerComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    VideoRoutingModule
  ]
})

export class VideoModule {
}
