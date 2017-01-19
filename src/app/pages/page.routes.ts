import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { IssueComponent } from './issue/issue.component';
import { IssueUpdateComponent } from './issue/issue-update/issue-update.component';
import { TopComponent } from './top/top.component';
import { WikiComponent } from './wiki/wiki.component';

import { GuardsPagesService } from './guards-pages.service';
import { GuardsIssueService } from './issue/guards-issue.service';
import { GuardsTopService } from './top/guards-top.service';
import { GuardsWikiService } from './wiki/guards-wiki.service';

const pagesRoutes: Routes = [
  {
    path: 'pages',
    component: PagesComponent,
    canActivate: [GuardsPagesService],
    canActivateChild: [GuardsPagesService],
    canDeactivate: [GuardsPagesService],
    resolve: [GuardsPagesService],
    canLoad: [GuardsPagesService],
    children: [
      { path: '', redirectTo: 'top', pathMatch: 'full' },
      {
        path: 'top',
        component: TopComponent,
        canActivate: [GuardsTopService],
        canActivateChild: [GuardsTopService],
        canDeactivate: [GuardsTopService],
        resolve: [GuardsTopService],
        canLoad: [GuardsTopService],
      },
      {
        path: 'issue',
        component: IssueComponent,
        canActivate: [GuardsIssueService],
        canActivateChild: [GuardsIssueService],
        canDeactivate: [GuardsIssueService],
        resolve: [GuardsIssueService],
        canLoad: [GuardsIssueService],
      },
      { path: 'issue/update/:id', component: IssueUpdateComponent },
      {
        path: 'wiki',
        component: WikiComponent,
        canActivate: [GuardsWikiService],
        canActivateChild: [GuardsWikiService],
        canDeactivate: [GuardsWikiService],
        resolve: [GuardsWikiService],
        canLoad: [GuardsWikiService],
      }
    ]
  }
];

export const pagesRoutingProviders: any[] = [];

export const pagesRouting: ModuleWithProviders = RouterModule.forChild(pagesRoutes);
