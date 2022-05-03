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





// })
// export class RegistrationService {

//   private readonly url:String="https://vaikustovykla-46997-default-rtdb.europe-west1.firebasedatabase.app/";

//   constructor(private http:HttpClient) {

//    }

//    public addRegistration(registration:Registration){
//     return this.http.post(`${this.url}/registrations.json`, registration);
//    }

//    public getRegistration(id:String){
//      return this.http.get<Registration>(`${this.url}/registrations/${id}.json`).pipe(map((response)=>{
//        response.id=id;
//        return response;
//      }))
//    }

//    public updateRegistration(registration:Registration){
//      return this.http.patch<Registration>(`${this.url}/registrations/${registration.id}.json`, registration);
//    }

//    public getRegistrations(){
//     return this.http.get<{[key:string]:Registration}>(`${this.url}/registrations.json`).pipe( map((response)=>{
//      const regArray:Registration[]=[];
//      for(let key in response){
//        regArray.push({...response[key],id:key})
//      }
//      return regArray;
//     }));
//   }

//   public deleteRegistration(id:String){
//     return this.http.delete(`${this.url}/registrations/${id}.json`);
//   }
// }
