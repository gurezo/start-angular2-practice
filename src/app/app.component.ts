import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app sample!';
  demoData: any =[
    {name: 'adam' , age: 25},
    {name: 'eve ', age: 25},
    {name: 'cain' , age: 5},
    {name: 'abel' , age: 4}
  ];
}
