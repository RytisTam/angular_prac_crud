import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Registration } from 'src/app/models/registration';
import { AuthService } from 'src/app/services/auth.service';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-update-registration',
  templateUrl: './update-registration.component.html',
  styleUrls: ['./update-registration.component.css']
})
export class UpdateRegistrationComponent implements OnInit {

  public id:String;
  public registration:Registration=new Registration('','','',0,0,'','');
  public dataStatus:String='loading';
  public updateFailed:Boolean=false;

  constructor(private registrationService:RegistrationService,
              private router:Router,
              private route:ActivatedRoute,
              private auth:AuthService) {
    this.id = this.route.snapshot.params['id'];
   }

  ngOnInit(): void {
    if (!this.auth.isLoggedIn){
      this.router.navigate(['/login']);
    }
    this.registrationService.getRegistration(this.id).subscribe({
      next:(response)=>{
        this.dataStatus = 'successLoad';
        this.registration = response;
      },
      error:(error)=>{
        this.dataStatus = 'failedLoad';
        console.log(error);
      }
    })


    // this.registrationService.getRegistration(this.id).subscribe((response)=>{
    //   console.log(response);
    //   this.registration = response;
    // })
  }

  public onSubmit(){
    this.registrationService.updateRegistration(this.registration).subscribe({
      next:(response)=>{
        this.router.navigate(['/']);
      },
      error:(error)=>{
        this.updateFailed=true;
        console.log(error);
        
      }
    })
  }

  // public onSubmit(){
  //   this.registrationService.updateRegistration(this.registration).subscribe((response)=>{
  //     console.log(response);
  //     this.router.navigate(['/']);
  //   })
  // }

}
