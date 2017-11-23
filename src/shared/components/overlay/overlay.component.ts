import { Component, Injector, Input } from '@angular/core';
import {
  trigger, state, style, animate, transition
} from '@angular/animations';
import { SidenavEnum } from '../../../config/models/interfaces';
import { OverlayIFace } from './overlay-item';

@Component({
  selector: 'overlay-comp',
  templateUrl: './overlay.template.html',
  animations: [
    trigger('popover', [
      state('open', style({ opacity: 1 })), state('closed', style({ opacity: 0 })),
      transition('closed => open', animate('400ms ease-in')), transition('open => closed', animate('500ms ease-out')),
      transition('void => closed', [
        style({ opacity: 0 }), animate(500)
      ]), transition('closed => void', [
        animate(500, style({ opacity: 0 }))
      ]), transition('void => open', [
        style({ opacity: 1 }), animate(400)
      ]), transition('open => void', [
        animate(400, style({ opacity: 1 }))
      ])
    ])
  ]
})
export class OverlayComponent implements OverlayIFace {
  @Input() data: any;
  
  public showNum;
  public x;
  public y;
  public state;
  
  public popoverState;
  public isVisible = false;
  constructor(private injector: Injector) {
    this.showNum = this.injector.get('showNum') || 9999;
    this.x = (+this.injector.get('x') - 20) > 0 ? (+this.injector.get('x') - 20) : +this.injector.get('x');
    this.y = (+this.injector.get('y') + 10) > 0 ? (+this.injector.get('y') + 10) : +this.injector.get('y');
    this.state = this.injector.get('state');
    this.popoverState = 'closed';
    this.show();
  }
  
  public show = () => {
    this.isVisible = true;
    setTimeout(() => {
      this.popoverState = 'open';
    }, 200);
    
  };
  
  public popoverClick = (e) => {
    console.log('clicked popover');
  };
  
  public overlayClick = (e) => {
    console.log('clicked overlay');
    if(this.isVisible) {
      this.popoverState = 'closed';
      setTimeout(() => {
        this.isVisible = false;
      }, 500);
      
    }
    
  };
}
