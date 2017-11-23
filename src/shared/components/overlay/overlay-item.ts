import { Type } from '@angular/core';

export interface OverlayIFace {
  data: any;
}

export class OverlayItem {
  constructor(public component: Type<any>, public data: any) {}
}
