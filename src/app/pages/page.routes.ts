import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { IssueComponent } from './issue/issue.component';
import { TopComponent } from './top/top.component';
import { WikiComponent } from './wiki/wiki.component';

const pagesRoutes: Routes = [
  {
    path: 'pages',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'top', pathMatch: 'full' },
      { path: 'top', component: TopComponent },
      { path: 'issue', component: IssueComponent },
      { path: 'wiki', component: WikiComponent }
    ]
  }
];

export const pagesRoutingProviders: any[] = [];

export const pagesRouting: ModuleWithProviders = RouterModule.forChild(pagesRoutes);
