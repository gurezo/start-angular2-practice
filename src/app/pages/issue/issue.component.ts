import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Issue } from './issue';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {

  issue: Issue;
  issues: Issue[];

  constructor() { }

  ngOnInit() {
    this.issue = new Issue;
    this.issues = [];
  }

  public onSubmit(forms: NgForm): void {
    const issue = {
      title: forms.value.title,
      desc: forms.value.desc
    }

    this.issues.push(issue);
    forms.reset();
  }

  public onDelete(index: number): void {
    this.issues.splice(index, 1);
  }

}
