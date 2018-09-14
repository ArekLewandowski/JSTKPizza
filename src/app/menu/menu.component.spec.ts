import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MenuComponent} from './menu.component';
import {MenuService} from '../shared/menu.service';
import {RouterTestingModule} from '@angular/router/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {Dish} from '../shared/dish';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {OrderServiceService} from '../shared/order-service.service';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let menuService: MenuService;
  let orderService: OrderServiceService;

  const mockedDish: Dish = {
    id: 1,
    name: 'Pizza Margherita',
    available: false,
    description: 'Sos, ser',
    type: 'pizza',
    price: 22.50,
  };
  const mockedDishes: Dish[] = [
    mockedDish,
  ];
  const obs: Observable<Dish[]> = new Observable();

  const menuServiceMock = {
    getDishes: jasmine.createSpy('getDishes'),
    dishes$: new BehaviorSubject<Dish[]>(mockedDishes),
    getPizza: jasmine.createSpy('getPizza').and.returnValue(obs),
    getDrinks: jasmine.createSpy('getDrinks').and.returnValue(obs),
    getPasta: jasmine.createSpy('getPasta').and.returnValue(obs),
  };
  const orderServiceMock = {
    addDishToCart: jasmine.createSpy('addDishToCart'),
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [MenuComponent],
      providers: [{provide: MenuService, useValue: menuServiceMock},
        {provide: OrderServiceService, useValue: orderServiceMock},
      ],
      imports: [RouterTestingModule, HttpClientTestingModule]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    menuService = TestBed.get(MenuService);
    orderService = TestBed.get(OrderServiceService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should get Dishes', () => {
    // when
    component.getDishes();
    // then
    expect(menuService.getDishes).toHaveBeenCalled();
  });
  it('should get dishes', () => {
    // when
    component.getDishes();
    // then
    expect(menuService.getDishes).toHaveBeenCalled();
  });
  it('should get pizza', () => {
    // given
    let dishes = component.dishes = [];
    // when
    component.getPizza();
    // then
    expect(menuService.getPizza).toHaveBeenCalled();
  });
  it('should get pasta', () => {
    // given
    let dishes = component.dishes = [];
    // when
    component.getPasta();
    // then
    expect(menuService.getPasta).toHaveBeenCalled();
  });
  it('should get drinks', () => {
    // given
    let dishes = component.dishes = [];
    // when
    component.getDrinks();
    // then
    expect(menuService.getDrinks).toHaveBeenCalled();
  });
  it('should add dish to cart', () => {
    // given
    // when
    component.addDishToCart(mockedDish);
    // then
    expect(orderService.addDishToCart).toHaveBeenCalled();
  });
});
