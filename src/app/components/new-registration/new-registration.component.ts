import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Registration } from 'src/app/models/registration';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-new-registration',
  templateUrl: './new-registration.component.html',
  styleUrls: ['./new-registration.component.css']
})
export class NewRegistrationComponent implements OnInit {

  constructor(private registrationService:RegistrationService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(f:NgForm){
    let fData = f.form.value;
    const registration = new Registration(
      fData.name,
      fData.surname,
      fData.gender,
      fData.birthYear,
      fData.kidClass,
      fData.phone,
      fData.email,
    )

    this.registrationService.addRegistration(registration).subscribe((response)=>{
      console.log(`Forma išsiųsta. Atsakymas:`);
      console.log(response);
      this.router.navigate(['/']);
    })
    
  }
}


