import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public authSuccess?:boolean=undefined;
  public isLoginMode = true;

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  public onSubmit(form:NgForm){
    const email:String=form.value.email;
    const password:String=form.value.password;
    console.log(this.isLoginMode);
    if (this.isLoginMode) {
    this.auth.login(email, password).subscribe({
      next:(response)=>{
        this.router.navigate(['/']);
      },
      error:(error)=>{
        this.authSuccess = false;
      }
    })
  } else {

    this.auth.register(email, password).subscribe({
      next:(response)=>{
        this.router.navigate(['/']);
      },
      error:(error)=>{
        this.authSuccess = false;
      }
    })

    }

  }

}
