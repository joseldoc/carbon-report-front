import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GENERAL_DATA_CONST} from '../../../../shared/constant/data.constant';
import {DataSelectInterface} from '../../../../shared/model/data-select.interface';
import {FormReportEnum} from '../../enums/report-page-action.enum';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportFormComponent implements OnInit {
  reportForm: FormGroup;
  dataConst = GENERAL_DATA_CONST;
  @Input() videos!: DataSelectInterface[];
  @Input() folders!: DataSelectInterface[];
  @Output() action = new EventEmitter<{ value: any | null, action: FormReportEnum }>();
  @Input() loading: boolean = false;

  formGroup: FormGroup;

  visible: boolean;
  formEnum: FormReportEnum

  constructor(private fb: FormBuilder) {
  }

  get fields(): FormArray {
    return this.reportForm.get('fields') as FormArray;
  }

  ngOnInit() {
    this.reportForm = this.fb.group({
      fields: this.fb.array([this.createField()]),
    });
  }

  addField(i: number) {
    const newField = this.createField();
    this.fields.push(newField)
  }

  createField(): FormGroup {
    return this.fb.group({
      selectedVideos: ['', Validators.required],
      vue: [''],
    });
  }

  emitAction() {
    this.visible = false;
    this.action.emit({
      value: this.reportForm.value,
      action: FormReportEnum.CREATE
    })
  }

  showDialog() {
    this.visible = true;
  }

  removeField(index: number) {
    this.fields.removeAt(index);
  }
}
