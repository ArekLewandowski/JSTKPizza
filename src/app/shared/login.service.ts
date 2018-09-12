import {Injectable, OnDestroy} from '@angular/core';
import {User} from './user';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
import {Observable, Subject} from 'rxjs';
import {Dish} from './dish';
import {HttpClient} from '@angular/common/http';
import {takeUntil} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  users: User[] = [];
  user: User;
  login = 'admin';
  password = 'admin';
  admin = false;
  index: number;

  constructor(private authService: AuthService,
              private router: Router,
              private httpClient: HttpClient) {
  }

  verifyUser(user: User) {
    this.httpClient.get<User[]>(`http://localhost:3000/users`, {params: {name: user.login}})
      .pipe(takeUntil(this.destroy$))
      .subscribe(userList => {
        this.users = userList;
        this.user = this.users.pop();
        if (this.user && user.password === this.user.password) {
          this.admin = true;
          this.authService.isLogged = true;
        } else {
          this.admin = false;
          this.authService.isLogged = false;
        }
        this.router.navigate(['admin']);
      });
  }

  logout() {
    this.admin = false;
    this.authService.isLogged = false;
    this.router.navigate(['menu']);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
