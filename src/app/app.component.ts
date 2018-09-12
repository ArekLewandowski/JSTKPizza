import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MenuService} from './shared/menu.service';
import {LoginService} from './shared/login.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pizza';
  user$ = new Subject<string>();
  user: string;

  constructor(private menuService: MenuService,
              private router: Router,
              private loginService: LoginService) {}
  ngOnInit() {
  }

  navigateToMenu() {
    this.menuService.getDishes();
    this.router.navigate(['/menu']);
  }
  logout() {
    this.loginService.logout();
  }
  isAdmin() {
    return this.loginService.admin;
  }

}
