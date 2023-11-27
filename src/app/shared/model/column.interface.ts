import {ActionTableEnum} from '../../core/data-table/action-table.enum';

export interface ColumnTableInterface<T> {
  headerName: string,
  fieldName: keyof T,
  isModelProperty?: boolean,
  isDate?: boolean
}

export interface TableActionEmitInterface<T> {
  element: T,
  action: ActionTableEnum
}
