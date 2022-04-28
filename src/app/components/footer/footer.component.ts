import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public isLoggedIn = false;

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.auth.isLoggedIn;
    this.auth.userUpdated.subscribe((res)=>{
      this.isLoggedIn = this.auth.isLoggedIn;
    })
  }

}
