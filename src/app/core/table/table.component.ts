import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from '../../service/common.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() columns = [];
  @Input() rows = [];
  @Input() pagnation: boolean;

  constructor(private service: CommonService) { }

  ngOnInit() {

  }
}
