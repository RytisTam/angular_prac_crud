import { Directive } from '@angular/core';
import { AbstractControl, FormControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[AgeValidator]',
  providers:[
    {
      provide:NG_VALIDATORS,
      useExisting:AgeValidatorDirective,
      multi:true
    }
  ]
})
export class AgeValidatorDirective implements Validator {

  constructor() { }
  validate(control: FormControl): ValidationErrors | null {
  let currentYear: number=new Date().getFullYear();
  let age:number = control.value
    if (currentYear - age > 18 || currentYear - age < 12){
      return {'error': 'Amžius privalo būti tarp 12 ir 18.'};
    }
    return null;
  }

}
