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
    this.issue = new Issue;
    this.issues = this.issueService.list;
  }

  public onSubmit(forms: NgForm): void {
    const issue = {
      title: forms.value.title,
      desc: forms.value.desc
    }

    this.issueService.add(issue);
    forms.reset();
  }

  public onDelete(index: number): void {
    this.issueService.dedelete(index);
  }

}
