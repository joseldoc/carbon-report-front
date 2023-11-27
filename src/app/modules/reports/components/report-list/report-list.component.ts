import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ReportInterface} from '../../model/report.interface';
import {GENERAL_DATA_CONST} from '../../../../shared/constant/data.constant';
import {ListReportEnum} from '../../enums/report-page-action.enum';
import {ColumnTableInterface} from '../../../../shared/model/column.interface';
import {TreeNode} from 'primeng/api';
import {NodeService} from '../../service/node.service';


@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent implements OnInit {
  @Input() reports: ReportInterface[]
  @Input() loading: boolean | null = false;
  @Output() action = new EventEmitter<{ value: any | null, action: ListReportEnum }>();

  selectedReports: ReportInterface[] = [];
  dataConst = GENERAL_DATA_CONST;
  listEnum = ListReportEnum;

  headers: string[] = [];
  @Input() columns!: ColumnTableInterface<ReportInterface>[];

  reportDetail!: TreeNode[];
  // Modal detail report
  dialogVisible: boolean;

  constructor(private nodeService: NodeService) {
  }

  ngOnInit() {
    this.headers = this.columns.map((elt: ColumnTableInterface<ReportInterface>) => elt.headerName);
    this.headers.push("actions");
  }

  emitAction(event: ListReportEnum) {
    this.action.emit({
      value: this.selectedReports,
      action: event
    })
  }

  isDate(col: ColumnTableInterface<ReportInterface>): boolean {
    return !!col.isDate;
  }

  detail(data: any) {
    // get nodes
    this.nodeService.getFiles(data).then((files) => (this.reportDetail = files));
    this.dialogVisible = true;
  }

}
