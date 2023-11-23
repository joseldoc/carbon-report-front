import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FormActionsEnum} from '../../../../shared/enums/form-action.enum';
import {DataSelectInterface} from '../../../../shared/model/data-select.interface';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportFormComponent implements OnInit {

  reportForm: FormGroup;

  @Input() videos: DataSelectInterface[] = [];
  @Output() action = new EventEmitter<{ value: any | null, action: FormActionsEnum }>();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.reportForm = this.fb.group({
      videos: [this.videos],
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
