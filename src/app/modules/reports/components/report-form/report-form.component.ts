import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormActionsEnum} from '../../../../shared/enums/form-action.enum';
import {DataSelectInterface} from '../../../../shared/model/data-select.interface';
import {GENERAL_DATA_CONST} from '../../../../shared/constant/data.constant';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportFormComponent implements OnInit {

  reportForm: FormGroup;
  dataConst = GENERAL_DATA_CONST;
  @Input() videos: DataSelectInterface[] = [];
  @Output() action = new EventEmitter<{ value: any | null, action: FormActionsEnum }>();
  @Input() loading: boolean = false;

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
