import { Component, OnInit, AfterViewInit, Input } from '@angular/core';

export interface InputStatus {
  dirty: boolean;
  pristine: boolean;
  touched: boolean;
  disabled: boolean;
  invalid: boolean;
  valid: boolean;
  errors: {
    required: boolean;
    email: boolean;
    minlength: boolean;
    maxlength: boolean;
  }
}

@Component({
  selector: 'user-msg',
  templateUrl: './user-msg.template.html',
  styleUrls: ['./user-msg.styles.scss']
})
export class UserMsg implements OnInit, AfterViewInit {

 
  
  @Input() dirty: boolean;
  @Input() pristine: boolean;
  @Input() touched: boolean;
  @Input() disabled: boolean;
  @Input() invalid: boolean;
  @Input() valid: boolean;
  @Input() required: boolean;
  @Input() email: boolean;
  @Input() minlength: boolean;
  @Input() maxlength: boolean;
  @Input() min: number;
  @Input() max: number;
  
  public validators = {
    required: 'This item is required.',
    email: 'Please enter a valid email address.',
    minlength: `Input should be at least ${this.min} characters.`,
    maxlength: `Input exceeded the maximum  of ${this.max} characters.`,
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
      this.validators = {
        required: 'This item is required.',
        email: 'Please enter a valid email address.',
        minlength: `Must be at least ${this.min} characters.`,
        maxlength: `Cannot be more than ${this.max} characters.`,
      };
    });
  };

}
