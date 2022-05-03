import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { NaturalistFormData } from 'src/app/models/NaturalistData';
import { NaturalistRegistrationService } from 'src/app/services/naturalist-registration.service';



@Component({
  selector: 'app-registration-to-naturalist-club',
  templateUrl: './registration-to-naturalist-club.component.html',
  styleUrls: ['./registration-to-naturalist-club.component.css']
})
export class RegistrationToNaturalistClubComponent implements OnInit {

  public naturalistRegistrationForm:FormGroup;

  constructor(private naturalistRegistrationService:NaturalistRegistrationService) {
    this.naturalistRegistrationForm = new FormGroup({
      'name':new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(16)]),
      'surname':new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(16)]),
      'email':new FormControl(null, [Validators.required, Validators.email]),
      'kidClass':new FormControl(null, [Validators.required, this.checkKidClass]),
      'allergy':new FormArray([]),
      'pastActivity':new FormArray([]),
    })
   }

  ngOnInit(): void {
  }

  onSubmit(){
    const registration = {
      name:this.naturalistRegistrationForm.value.name,
      surname:this.naturalistRegistrationForm.value.surname,
      email:this.naturalistRegistrationForm.value.email,
      kidClass:this.naturalistRegistrationForm.value.kidClass,
      allergy:this.naturalistRegistrationForm.value.allergy,
      pastActivity:this.naturalistRegistrationForm.value.pastActivity,
    } as NaturalistFormData

    this.naturalistRegistrationService.addNaturalistRegistration(registration).subscribe((response)=>{
      console.log(response)
    });

    (<FormArray>this.naturalistRegistrationForm.get('allergy')).controls = [];
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

  addPastActivity(){
    const activity = new FormGroup({
      year:new FormControl(null, Validators.required),
      title:new FormControl(null, Validators.required),
      activityType:new FormControl(null, Validators.required),
    });
    (<FormArray>this.naturalistRegistrationForm.get('pastActivity')).push(activity)
  }

  get allergies(){
    return (<FormArray>this.naturalistRegistrationForm.get('allergy')).controls;
  }

  get pastActivities(){
    return (<FormArray>this.naturalistRegistrationForm.get('pastActivity')).controls;
  }

  deleteAllergy(){
    (<FormArray>this.naturalistRegistrationForm.get('allergy')).controls.pop();
    this.naturalistRegistrationForm.value.allergy.pop()
  }

  toFormGroup(element:AbstractControl):FormGroup{
    return <FormGroup>element;
  }
}
