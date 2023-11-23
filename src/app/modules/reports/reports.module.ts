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
import {EffectsModule} from '@ngrx/effects';
import {VIDEO_STATE_NAME, VideoEffect, VideoReducer} from '../video/store';
import {StoreModule} from '@ngrx/store';

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
    ButtonModule,

    EffectsModule.forFeature([VideoEffect]),
    StoreModule.forFeature(VIDEO_STATE_NAME, VideoReducer.reducer)
  ]
})

export class ReportsModule {
}
