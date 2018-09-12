import {TestBed, inject, fakeAsync} from '@angular/core/testing';
import {HttpClient, HttpHandler} from '@angular/common/http';
import { MenuService } from './menu.service';
import {Dish} from './dish';
import {HttpTestingController} from '@angular/common/http/testing';

fdescribe('MenuService', fakeAsync(() => {
  let menuService: MenuService;
  let dish: Dish;
  let mockBackend: HttpTestingController;
  const mockedDish: Dish = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MenuService, HttpClient, HttpHandler, HttpTestingController]
    });
    menuService = TestBed.get(MenuService);
  });

  it('should be created', inject([MenuService], (service: MenuService) => {
    expect(menuService).toBeTruthy();
  }));
  it('shouldLoadDish', inject([MenuService], (service: MenuService) => {
    // when
    service.getDish(1).subscribe(dishes => this.dish = dishes);
    mockBackend = TestBed.get(HttpTestingController);
    expect(dish).toEqual(mockedDish);
  }));
}));
