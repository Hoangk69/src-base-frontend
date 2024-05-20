import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { PagerService } from '../services/index';
import { Constants } from '../../../models/constants';
import { IPager } from '../../..//models/IPager';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent implements OnInit {
  @Input() pageSize: number;
  @Input() total: number;
  @Output() onChange: EventEmitter<IPager> = new EventEmitter();
  pager: any = {};
  PAGESIZES = Constants.PAGESIZES;

  constructor(private pagerService: PagerService) {}
  ngOnInit() {
    this.pager = this.pagerService.getPager(this.total, 1, this.pageSize);
  }
  refresh() {
    this.pager = this.pagerService.getPager(
      this.total,
      this.pager.currentPage,
      this.pageSize,
    );
  }
  setPage(prPage: number) {
    this.pager = this.pagerService.getPager(this.total, prPage, this.pageSize);
    this.onChange.emit({ page: prPage, limit: this.pageSize });
  }
  changePageSize(pagesize) {
    if (this.pageSize === pagesize) { return; }

    this.pageSize = pagesize;
    this.pager.currentPage = 1;
    this.onChange.emit({ page: this.pager.currentPage, limit: this.pageSize });
  }
  pagination(c, m) {
    const current = c;
    const last = m;
    const delta = 2;
    let range = [];
    let rangeWithDots = [];
    let l;

    range.push(1);

    if (last <= 1) {
      return range;
    }

    for (let i = current - delta; i <= current + delta; i++) {
      if (i < last && i > 1) {
        range.push(i);
      }
    }
    range.push(last);

    for (let i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      l = i;
    }

    return rangeWithDots;
  }
}
