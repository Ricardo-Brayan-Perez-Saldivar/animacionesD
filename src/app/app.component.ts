import { Component } from '@angular/core';

import data from './data';

//animaciones
import {trigger, style,transition,animate, state} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('enterState',[
      state('void',style({
        transform: 'translateX(-100%)',
        opacity:0
      })),
      transition(':enter',[
        animate(300,style({
          transform: 'translateX(0)',
          opacity:1
        }))
      ])
    ])
  ]
})
export class AppComponent {
  title = 'animaciones';
  public courses: any[] = data;
}
