import { Component, OnInit } from '@angular/core';
import { NaturalistFormData } from 'src/app/models/NaturalistData';
import { NaturalistRegistrationService } from 'src/app/services/naturalist-registration.service';

@Component({
  selector: 'app-naturalists-list',
  templateUrl: './naturalists-list.component.html',
  styleUrls: ['./naturalists-list.component.css']
})
export class NaturalistsListComponent implements OnInit {

  public naturalistRegistrations:NaturalistFormData[]=[];

  constructor(private naturalistsRegistrationService:NaturalistRegistrationService) { 

  }

  ngOnInit(): void {
    this.naturalistsRegistrationService.getNaturalistRegistrations().subscribe((response)=>{
      this.naturalistRegistrations = response;
    })
  }

}
