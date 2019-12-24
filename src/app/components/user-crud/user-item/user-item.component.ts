import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { CruduserService } from 'src/app/services/cruduser.service';
import { AuthService } from 'src/app/services/auth-service.service';
import { Authuser, Role } from 'src/app/models/authuser.model';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() user: User;
  constructor(private UserService: CruduserService, private authServ: AuthService) { }
  update: boolean = false;
  LoggedUser: Authuser
  admin = false;
  ngOnInit() {
    this.authServ.loggedUser.subscribe(res => {
      if (res != null) {
        this.LoggedUser = res;
        if (this.LoggedUser.role = Role.Admin) {
          this.admin = true;
        }
      }
    });
  }
  deleteUser(userId: number) {
    this.UserService.deleteUser(userId);
  }
  updateUser(userId, user) {
    this.UserService.updateUser(userId, user);
    console.log(user);
    this.update = false;
  }
}
