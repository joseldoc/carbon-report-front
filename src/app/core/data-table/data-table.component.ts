import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgFor, NgIf} from '@angular/common';
import {TableModule} from 'primeng/table';
import {ColumnTableInterface} from '../../shared/model/column.interface';
import {ActionTableEnum} from './action-table.enum';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [NgFor, TableModule, NgIf],
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableComponent<T> implements OnInit {

  @Input() COLUMNS: ColumnTableInterface<T>[];
  @Input() haveActions: boolean = false;
  @Input() DATA: T[] = [];

  headers: string[] = [];
  actionsEnum = ActionTableEnum;
  @Output() selectRows = new EventEmitter<T[]>();

  selectedData: T[];

  actionTable = ActionTableEnum;

  ngOnInit() {
    this.headers = this.COLUMNS.map((elt: ColumnTableInterface<T>) => elt.headerName);
    if (this.haveActions) this.headers.push("actions");
    this.headers.unshift('selected');
  }

  /**
   * display data between headerName && data
   * @param h
   * @param data
   */
  displayData(h: string, data: any): string {
    let element = this.COLUMNS.find((elt: ColumnTableInterface<T>) => elt.headerName === h && elt.isModelProperty);
    if (!element?.fieldName) return '';
    return data[element?.fieldName];
  }

  /**
   * Emit event from delete && edit btn
   * @param elt
   * @param action
   */
  onSelectClick() {
    this.selectRows.emit(this.selectedData);
  }
}
