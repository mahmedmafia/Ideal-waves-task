import { Component, OnInit } from '@angular/core';
import { Authuser, Role } from 'src/app/models/authuser.model';
import { AuthService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private authServ: AuthService, private router: Router) { }
  LoggedUser: Authuser;
  ngOnInit() {
    this.authServ.loggedUser.subscribe(result => {
      this.LoggedUser = result;
    });
  }
  Login(name, password) {
    this.authServ.login(name.value, password.value);
    if (this.authServ.isLoggedin) {
      this.router.navigate(['/users']);
    }
  }

}
