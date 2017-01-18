import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IssueComponent } from './issue.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    IssueComponent
  ]
})
export class IssueModule { }
