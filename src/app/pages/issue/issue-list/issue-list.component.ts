import { Component, OnInit } from '@angular/core';

import { Issue } from '../issue';
import { IssueService } from '../issue.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {

  issues: Issue[];

  constructor(
    private issueService: IssueService
  ) { }

  ngOnInit() {
    this.issues = this.issueService.list;
  }

  public onDelete(index: number): void {
    this.issueService.delete(index);
  }

}
