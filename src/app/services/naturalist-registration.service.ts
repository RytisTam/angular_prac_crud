import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NaturalistFormData } from 'src/app/models/NaturalistData';

@Injectable({
  providedIn: 'root'
})
export class NaturalistRegistrationService {

  private readonly url:String="https://vaikustovykla-46997-default-rtdb.europe-west1.firebasedatabase.app/";

  constructor(private http:HttpClient) { }

  public addNaturalistRegistration(registration:NaturalistFormData){
    return this.http.post(`${this.url}/naturalistRegistrations.json`, registration)
  }

}




