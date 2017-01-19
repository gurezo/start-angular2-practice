import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IssueComponent } from './issue.component';

import { IssueService } from './issue.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    IssueComponent
  ],
  providers: [
    IssueService
  ]
})
export class IssueModule { }
