import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {DataTableComponent} from '../../core/data-table/data-table.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {ReportsRoutingModule} from './reports-routing.module';
import {FormReportContainerComponent} from './pages/form-report-container/form-report-container.component';
import {ReportFormComponent} from './components/report-form/report-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MultiSelectModule} from 'primeng/multiselect';

@NgModule({
  declarations: [
    FormReportContainerComponent,
    ReportFormComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    ReportsRoutingModule,
    ReactiveFormsModule,
    FormsModule,

    // table
    TableModule,
    DataTableComponent,
    ButtonModule,
    MultiSelectModule,
    ButtonModule
  ]
})

export class ReportsModule {
}
