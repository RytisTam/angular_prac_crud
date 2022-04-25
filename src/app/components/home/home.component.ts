import { Component, OnInit } from '@angular/core';
import { Registration } from 'src/app/models/registration';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public registrations:Registration[]=[];
  public dataStatus:String='loading';

  constructor(private registrationService:RegistrationService) { }

  private loadData(){
    this.registrationService.getRegistrations().subscribe({
      next:(response:Registration[])=>{
        this.registrations = response;
        this.dataStatus = 'successLoad';
      },
      error:(error)=>{
        this.dataStatus = 'failedLoad';
      }
    })
  }

  ngOnInit(): void {
    this.loadData();
  }

  deleteRegistration(id:String){
    this.registrationService.deleteRegistration(id).subscribe((response)=>{
      this.loadData();
    })
  }
  

}
