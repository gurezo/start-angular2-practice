import {
  Component,
  OnInit,
  Input,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  animations: [
    trigger('menuState', [
        state('inactive', styles({
            transform: 'scale(1)'
          })),
        state('active', styles({
          borderBottom: '2px solid #333333',
          transform: 'scale(1.2)'
        })),
        transition('inactive => active', animate('300ms ease-in')),
        transition('active => inactive', animate('300ms ease-out'))
      ])
    ]
})

export class PagesComponent implements OnInit {

  menuState: string;

  links = [
    {
      url: 'top',
      name: 'Top',
      state: 'active'
    },
    {
      url: 'issue',
      name: 'Issue',
      state: 'inactive'
    },
    {
      url: 'wiki',
      name: 'Wiki',
      state: 'inactive'
    }
  ];

  constructor(
    this.menuState = 'inactive'
  ) { }

  ngOnInit() {
  }

  onClick(i: number) {
    this.links.forEach(
      (element, index,arrary) => element.state = (i === index) ? 'active':'inactive'
    );
  }
}
