import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[overlay-host]',
})
export class OverlayDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
