import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopComponent } from './top/top.component';
import { PagesComponent } from './pages/pages.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TopComponent, PagesComponent]
})
export class PagesModule { }
