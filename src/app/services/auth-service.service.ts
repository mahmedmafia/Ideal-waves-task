import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Authuser, Role } from '../models/authuser.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedUser = new BehaviorSubject<Authuser>(null);
  isLoggedin = false;
  isAdmin = false;
  authUsers: Authuser[] = [
    new Authuser(0, 'admin', 'admin', Role.Admin),
    new Authuser(1, 'user', 'user', Role.user)
  ];
  constructor() { }
  login(name, passsword) {
    let User = this.authUsers.find(x => x.name == name && x.password == passsword);
    if (User) {
      this.loggedUser.next(User);
      this.isLoggedin = true;
      if (User.role = Role.Admin) {
        this.isAdmin = true;
      }
    }
    console.log(User);
  }
  logout() {
    this.loggedUser.next(null);
    this.isLoggedin = false;
  }
}
