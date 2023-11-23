import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormReportContainerComponent} from './pages/form-report-container/form-report-container.component';

const REPORTS_ROUTES: Routes = [
  {path: '', component: FormReportContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(REPORTS_ROUTES)],
  exports: [RouterModule]
})

export class ReportsRoutingModule {

}
