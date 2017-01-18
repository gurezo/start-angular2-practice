import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IssueModule } from './issue/issue.module';
import { WikiModule } from './wiki/wiki.module';

import { TopComponent } from './top/top.component';
import { PagesComponent } from './pages.component';

import { pagesRouting, pagesRoutingProviders } from './page.routes';

import { GuardsPagesService } from './guards-pages.service';
import { GuardsIssueService } from './issue/guards-issue.service';
import { GuardsTopService } from './top/guards-top.service';
import { GuardsWikiService } from './wiki/guards-wiki.service';

@NgModule({
  imports: [
    CommonModule,
    IssueModule,
    WikiModule,
    pagesRouting
  ],
  providers: [
    pagesRoutingProviders,
    GuardsPagesService,
    GuardsIssueService,
    GuardsTopService,
    GuardsWikiService
  ],
  declarations: [
    TopComponent,
    PagesComponent
  ]
})
export class PagesModule { }
