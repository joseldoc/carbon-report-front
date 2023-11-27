import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {DataTableComponent} from '../../core/data-table/data-table.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {ReportsRoutingModule} from './reports-routing.module';
import {ReportFormComponent} from './components/report-form/report-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MultiSelectModule} from 'primeng/multiselect';
import {EffectsModule} from '@ngrx/effects';
import {VIDEO_STATE_NAME, VideoEffect, VideoReducer} from '../video/store';
import {StoreModule} from '@ngrx/store';
import {InputNumberModule} from 'primeng/inputnumber';
import {FOLDER_STATE_NAME, FolderEffect, FolderReducer} from '../folder/store';
import {REPORT_STATE_NAME, ReportEffect, ReportReducer} from './store';
import {ReportComponent} from './pages/report/report.component';
import {ReportListComponent} from './components/report-list/report-list.component';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {TreeTableModule} from 'primeng/treetable';

@NgModule({
  declarations: [
    ReportFormComponent,
    ReportComponent,
    ReportListComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    ReportsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    // custom module
    TableModule,
    DataTableComponent,
    ButtonModule,
    MultiSelectModule,
    ButtonModule,
    InputNumberModule,
    DialogModule,
    DropdownModule,
    ProgressSpinnerModule,
    TreeTableModule,
    // store
    EffectsModule.forFeature([VideoEffect]),
    EffectsModule.forFeature([FolderEffect]),
    EffectsModule.forFeature([ReportEffect]),
    StoreModule.forFeature(VIDEO_STATE_NAME, VideoReducer.reducer),
    StoreModule.forFeature(FOLDER_STATE_NAME, FolderReducer.reducer),
    StoreModule.forFeature(REPORT_STATE_NAME, ReportReducer.reducer),
  ]
})

export class ReportsModule {
}
