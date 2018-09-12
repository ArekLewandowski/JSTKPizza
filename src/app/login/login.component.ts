import { Component, OnInit } from '@angular/core';
import {LoginService} from '../shared/login.service';
import {User} from '../shared/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model = new User('admin', 'admin');


  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
  }
  verifyUser(login: string, password: string) {
   let user = new User(login, password);
    this.loginService.verifyUser(user || this.model);
  }
}
