import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-to-naturalist-club',
  templateUrl: './registration-to-naturalist-club.component.html',
  styleUrls: ['./registration-to-naturalist-club.component.css']
})
export class RegistrationToNaturalistClubComponent implements OnInit {

  public naturalistRegistrationForm:FormGroup;

  constructor() {
    this.naturalistRegistrationForm = new FormGroup({
      'name':new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(16)]),
      'surname':new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(16)]),
      'email':new FormControl(null, [Validators.required, Validators.email]),
      'kidClass':new FormControl(null, [Validators.required, this.checkKidClass]),
      'allergy':new FormArray([]),
    })
   }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.naturalistRegistrationForm.value)
    this.naturalistRegistrationForm.reset()
  }

  checkKidClass(control:FormControl):{[s:string]:boolean}|null {
    if (control.value >= 6 && control.value <= 12) {
      return null;
    } else {
      return {'classIncorrect':true}
    }
  }

  addAllergy(){
    const input = new FormControl(null, Validators.required);
    (<FormArray>this.naturalistRegistrationForm.get('allergy')).push(input);
    // console.log(this.naturalistRegistrationForm.value.allergy)
    
  }

  get allergies(){
    return (<FormArray>this.naturalistRegistrationForm.get('allergy')).controls;
  }

  deleteAllergy(){
    console.log((<FormArray>this.naturalistRegistrationForm.get('allergy')).controls.pop());
  }
}
