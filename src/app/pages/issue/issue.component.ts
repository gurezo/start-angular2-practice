import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Issue } from './issue';
import { IssueService } './issue.service';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {

  issue: Issue;
  issues: Issue[];

  constructor(
    private issueService: IssueService
  ) { }

  ngOnInit() {
  }
}
