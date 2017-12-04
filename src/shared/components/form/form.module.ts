import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Checkbox } from './checkbox/checkbox.component';
import { EmailInput } from './email-input/email-input.component';
import { FormItem } from './form-item/form-item.component';
import { NumberInput } from './number-input/number-input.component';
import { PasswordInput } from './password-input/password-input.component';
import { SelectComponent } from './select/select.component';
import { TelInput } from './tel-input/tel-input.component';
import { TextInput } from './text-input/text-input.component';
import { TextareaComponent } from './textarea/textarea.component';
import { UserMsg } from './user-msg/user-msg.component';
import { FormComponent } from './form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  declarations: [
    Checkbox,
    EmailInput,
    FormItem,
    NumberInput,
    PasswordInput,
    SelectComponent,
    TelInput,
    TextInput,
    TextareaComponent,
    UserMsg,
    FormComponent
  ],
  providers: [
  
  ],
  entryComponents: [
  
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    Checkbox,
    EmailInput,
    FormItem,
    NumberInput,
    PasswordInput,
    SelectComponent,
    TelInput,
    TextInput,
    TextareaComponent,
    UserMsg,
    FormComponent
  ]
})
export class FormModule {

}
