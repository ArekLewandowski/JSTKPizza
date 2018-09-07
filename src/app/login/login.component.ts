import { Component, OnInit } from '@angular/core';
import {LoginService} from '../shared/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
  }
  verifyUser(login: string, password: string) {
    this.loginService.verifyUser(login, password);
  }
}

