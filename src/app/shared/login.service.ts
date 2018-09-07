import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  login = 'admin';
  password = 'admin';
  user = 'user';

  constructor() {}

  verifyUser(login: string, password: string) {
    if (login === this.login && password === this.password) {
      this.user = 'admin';
      alert('Login works!');
    }
  }
}
