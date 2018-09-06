import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {MenuService} from './shared/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pizza';

  constructor(private menuService: MenuService, private router: Router) {}

  navigateToMenu() {
    this.menuService.getDishes();
    this.router.navigate(['/menu']);
  }

}
