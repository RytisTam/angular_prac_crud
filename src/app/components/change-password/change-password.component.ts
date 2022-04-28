import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthResponseData } from 'src/app/models/authResponseData';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  public isLoginMode = true;
  public authSuccess?:Boolean;
  public user?:AuthResponseData;

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
    if (!this.auth.isLoggedIn){
      this.router.navigate(['/login']);
    }
    this.isLoginMode = this.auth.isLoggedIn;
    this.user = this.auth.user;
  }

  public onSubmit(form:NgForm){
    if (this.user){
    const password:String=form.value.password;
    console.log(this.isLoginMode);

    this.auth.changePassword(password).subscribe({
      next:(response)=>{
        this.router.navigate(['/']);
      },
      error:(error)=>{
        this.authSuccess = false;
        console.log(error);
        
      }
    })
  }}
}
