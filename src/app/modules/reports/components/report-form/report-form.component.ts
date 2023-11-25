import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormActionsEnum} from '../../../../shared/enums/form-action.enum';
import {GENERAL_DATA_CONST} from '../../../../shared/constant/data.constant';
import {DataSelectInterface} from '../../../../shared/model/data-select.interface';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.css']
})
export class ReportFormComponent implements OnInit {
  reportForm: FormGroup;
  dataConst = GENERAL_DATA_CONST;
  @Input() videos!: DataSelectInterface[];
  @Output() action = new EventEmitter<{ value: any | null, action: FormActionsEnum }>();
  @Input() loading: boolean = false;

  cities: DataSelectInterface[];
  formGroup: FormGroup;

  selectedVideos!: DataSelectInterface[];

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.reportForm = this.fb.group({
      selectedVideos: [[], Validators.required],
      vue: ['']
    });
  }

  emitAction() {
    this.action.emit({
      value: this.reportForm.value,
      action: FormActionsEnum.GENERATE
    })
  }
}
