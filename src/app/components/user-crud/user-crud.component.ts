import { Component, OnInit, ViewChild } from '@angular/core';
import { CruduserService } from 'src/app/services/cruduser.service';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-user-crud',
  templateUrl: './user-crud.component.html',
  styleUrls: ['./user-crud.component.css']
})
export class UserCrudComponent implements OnInit {

  constructor(private userService: CruduserService,private authServ:AuthService) { }
  @ViewChild('f', { static: false }) UserForm;
  isAdmin=false;
  ngOnInit() {
    this.isAdmin=this.authServ.isAdmin;
  }
  submit(name, age): boolean {
    console.log(name, age);
    this.userService.addUser(name, age);
    this.UserForm.reset();
    console.log(this.UserForm);
    return false;
  }
  
}
