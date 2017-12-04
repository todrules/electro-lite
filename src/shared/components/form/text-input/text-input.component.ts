import { Component, OnInit, AfterViewInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'text-input',
  templateUrl: './text-input.template.html',
  styleUrls: ['./text-input.styles.scss']
})
export class TextInput implements OnInit, AfterViewInit {

  @Input('inputId') inputId;
  @Input() min: number;
  @Input() max: number;
  @Input() placeholder: string;
  @Input() required: boolean;
  @Input() type: string;
  @ViewChild('value') value;
  @Input() label: string;
  
  public model = {
    value: null
  };
  
  public status = {
    dirty: false,
    pristine: true,
    touched: false,
    disabled: false,
    invalid: true,
    valid: false,
    errors: {
      required: false,
      email: false,
      minlength: false,
      maxlength: false
    }
  };
  
  constructor() {
  
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
      console.log(this.value);
    });
  };

}
