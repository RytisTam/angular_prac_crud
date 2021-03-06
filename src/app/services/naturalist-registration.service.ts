import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
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

  public getNaturalistRegistrations(){
    return this.http.get<{[key:string]:NaturalistFormData}>(`${this.url}/naturalistRegistrations.json`).pipe(map((response)=>{
      const naturalistRegistrations:NaturalistFormData[]=[];
      for(let key in response){
        naturalistRegistrations.push({...response[key],id:key})
      }
      return naturalistRegistrations
    }))
  }

  public isCouponAvailable(coupon:String){
    return this.http.get<number|null>(`${this.url}/coupons/${coupon}.json`).pipe( map((response)=> {
      if (response==null){
        return false;
      } else {
        return true;
      }
    }));
   }

  public disableCoupon(coupon:String){
    return this.http.patch(`${this.url}/coupons.json`, {
      [coupon as string]:0,
    })
  }

}




