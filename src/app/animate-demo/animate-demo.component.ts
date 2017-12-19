import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes} from '@angular/animations';
@Component({
  selector: 'app-animate-demo',
  template: `
    <div class="traffic-light" [@signal]="signal"></div>
    <button (click)="go()">go</button>
    <button (click)="stop()">stop</button>
  `,
  styles: [`
    .traffic-light{  width: 100px;  height: 100px;  background-color: black;  }
  `],
  animations: [
    trigger('signal', [
      state('void', style({
        'transform':'translateX(-100%)'
      })),
      state('go', style({
        'background-color': 'green',
        'height':'100px'
      })),
      state('stop', style({
        'background-color':'red',
        'height':'50px'
      })),
      transition('void => *', animate(5000, keyframes([
        style({'transform': 'scale(0)'}),
        style({'transform': 'scale(0.1)'}),
        style({'transform': 'scale(0.3)'}),
        style({'transform': 'scale(0.6)'}),
        style({'transform': 'scale(0.8)'}),
        style({'transform': 'scale(1)'})
      ]))),
      transition('* => *', animate('.5s 1s cubic-bezier(0.2, 0.8, 0.3, 1.8)'))
    ])
  ]
})
export class AnimateDemoComponent implements OnInit {
    signal:string;
  
    stop(){
      this.signal = 'stop';
    }
  
    go(){
      this.signal = 'go';
    }
    constructor() { }

    ngOnInit() {
      
    }

}
