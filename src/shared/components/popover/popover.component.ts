import {
  Component, OnInit, AfterViewInit, ViewChild, ComponentFactoryResolver, ViewContainerRef, ReflectiveInjector, Injector, Input, OnDestroy
} from '@angular/core';
import { OverlayDirective } from '../overlay/overlay.directive';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.template.html',
  styleUrls: ['./popover.styles.scss']
})
export class PopoverComponent implements OnInit, AfterViewInit, OnDestroy {
  
  @ViewChild(OverlayDirective) popoverHost: OverlayDirective;
  @ViewChild('popover', { read: ViewContainerRef }) popover: ViewContainerRef;
  
  public currentComponent = null;
  
  @Input() set componentData(data: { component: any, inputs: any }) {
    if(!data) {
      return;
    }
    let inputProviders = Object.keys(data.inputs)
      .map((inputName) => {
        return {
          provide: inputName,
          useValue: data.inputs[inputName]
        };
      });
    let resolvedInputs = Injector.create(inputProviders, this.popover.parentInjector);
    let factory = this.componentFactoryResolver.resolveComponentFactory(data.component);
    let component = factory.create(resolvedInputs);
    this.popover.insert(component.hostView);

    if(this.currentComponent) {
      this.currentComponent.destroy();
    }
    
    this.currentComponent = component;
  }
  
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  
  }
  
  ngOnInit() {
    this.init();
  }
  
  private init = () => {
  
  };
  
  ngAfterViewInit() {
    this.viewInit();
  }
  
  private viewInit = () => {
    
    setTimeout(() => {
      // do something
    });
  };
  
  ngOnDestroy() {
    this.destroy();
  }
  
  private destroy = () => {
  
  };

}
