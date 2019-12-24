import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CruduserService {
  onUsersChange = new Subject<User[]>();
  private Users: User[] = [new User(0, 'mahmed', 21), new User(1, 'hady', 12)];
  constructor() { }
  getUsers() {
    return this.Users.slice();
  }
  addUser(name, age) {
    var newuser=new User(this.Users.length,name,age);
    this.Users.push(newuser);
    this.onUsersChange.next(this.Users.slice());
  }
  getUser(userId: number) {
    return this.Users.find((x) => x.id == userId);
  }
  deleteUser(userId: number) {
    this.Users = this.Users.filter(x => x.id !== userId);
    this.onUsersChange.next(this.Users.slice());
  }
  updateUser(userId: number, user: User) {
    var index = this.Users.findIndex(x => x.id == userId);
    this.Users[index] = user;
    this.onUsersChange.next(this.Users.slice());
  }
}
