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

  public authSuccess?:boolean;

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  public onSubmit(form:NgForm){
    const email:String=form.value.email;
    const password:String=form.value.password;

    this.auth.register(email, password).subscribe({
      next:(response)=>{
        this.authSuccess = true;
      },
      error:(error)=>{
        this.authSuccess = false;
      }
    })

  }

}
