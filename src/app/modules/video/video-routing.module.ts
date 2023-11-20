import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListVideoContainerComponent} from './pages/list-video-container/list-video-container.component';

const VIDEO_ROUTES: Routes = [
  {path: '', component: ListVideoContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(VIDEO_ROUTES)],
  exports: [RouterModule]
})

export class VideoRoutingModule {

}
