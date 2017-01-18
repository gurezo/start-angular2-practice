import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IssueModule } from './issue/issue.module';
import { WikiModule } from './wiki/wiki.module';

import { TopComponent } from './top/top.component';
import { PagesComponent } from './pages.component';

import { pagesRouting, pagesRoutingProviders } from './page.routes';

@NgModule({
  imports: [
    CommonModule,
    IssueModule,
    WikiModule,
    pagesRouting
  ],
  declarations: [TopComponent, PagesComponent]
})
export class PagesModule { }
