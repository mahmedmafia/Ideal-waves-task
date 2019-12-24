import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service.service';
import { Authuser } from 'src/app/models/authuser.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authServ: AuthService) { }
  LoggedUser: Authuser;
  isLogged=false;
  ngOnInit() {
    this.authServ.loggedUser.subscribe(res => {
        this.LoggedUser = res;
        if(res!=null){
          this.isLogged=true;
        }else{
          this.isLogged=false;
        }
      
    });
  }
  Logout(){
    this.authServ.logout();
  }

}
