import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { CruduserService } from 'src/app/services/cruduser.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    this.UserSubscription.unsubscribe();
  }
  Users: User[];
  UserSubscription: Subscription;
  constructor(private UserService: CruduserService) { }

  ngOnInit() {
    this.Users = this.UserService.getUsers();
    this.UserSubscription = this.UserService.onUsersChange.subscribe((Result: User[]) => {
      this.Users = Result;
    });
  }

}
