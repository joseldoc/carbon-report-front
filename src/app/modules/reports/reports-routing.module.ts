import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReportComponent} from './pages/report/report.component';

const REPORTS_ROUTES: Routes = [
  {path: '', component: ReportComponent}
];

@NgModule({
  imports: [RouterModule.forChild(REPORTS_ROUTES)],
  exports: [RouterModule]
})

export class ReportsRoutingModule {

}
