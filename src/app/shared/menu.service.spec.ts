import {TestBed, inject, fakeAsync} from '@angular/core/testing';
import {HttpClient, HttpHandler} from '@angular/common/http';
import { MenuService } from './menu.service';
import {Dish} from './dish';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {isBoolean} from 'util';

describe('MenuService', () => {

  let menuService: MenuService;
  let mockedBackend: HttpTestingController;

  const mockedDish: Dish = {
    id: 1,
    name: 'Pizza Margherita',
    available: false,
    description: 'Sos, ser',
    type: 'pizza',
    price: 22.50,
  };
  const mockedPasta: Dish = {
    id: 1,
    name: 'Penne Rigatte',
    available: false,
    description: 'Sos, ser, pasta',
    type: 'pasta',
    price: 12.50,
  };
  const mockedDrink: Dish = {
    id: 1,
    name: 'Pepsi',
    available: false,
    description: 'Pepsi light 1l',
    type: 'drinks',
    price: 5.50,
  };
  const mockedDishes: Dish[] = [
    mockedDish,
    mockedPasta,
    mockedDrink
  ]

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MenuService],
      imports: [RouterTestingModule, HttpClientTestingModule]
    });
    menuService = TestBed.get(MenuService);
    mockedBackend = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(menuService).toBeTruthy();
  });

  it('should get dish', () => {
    // given
    let dish: Dish;
    // when
    menuService.getDish(mockedDish.id).subscribe(res => dish = res);
    mockedBackend.expectOne('http://localhost:3000/dishes/' + mockedDish.id).flush(mockedDish);
    // then
    expect(dish).toEqual(mockedDish);
  });

  it('should get pizza', () => {
    // given
    let dishes: Dish[];
    // when
    menuService.getPizza().subscribe(res => dishes = res);
    mockedBackend.expectOne('http://localhost:3000/dishes?type=pizza').flush(mockedDishes);
    // then
    expect(dishes).toEqual(mockedDishes);
  });

  it('should get pasta', () => {
    // given
    let dishes: Dish[];
    // when
    menuService.getPasta().subscribe(res => dishes = res);
    mockedBackend.expectOne('http://localhost:3000/dishes?type=pasta').flush(mockedDishes);
    // then
    expect(dishes).toEqual(mockedDishes);
  });
  it('should get drinks', () => {
    // given
    let dishes: Dish[];
    // when
    menuService.getDrinks().subscribe(res => dishes = res);
    mockedBackend.expectOne('http://localhost:3000/dishes?type=drinks').flush(mockedDishes);
    // then
    expect(dishes).toEqual(mockedDishes);
  });
  it('should get dishes', () => {
    // given
    let dishes: Dish[];
    menuService.dishes$.subscribe(res => dishes = res);

    // when
    menuService.getDishes();
    mockedBackend.expectOne('http://localhost:3000/dishes').flush(mockedDishes);
    // then
    expect(dishes).toEqual(mockedDishes);
  });
  it('should set available', () => {
    // given
    spyOn(menuService, 'setAvailable');
    let dishes: Dish[];
    menuService.dishes$.subscribe(res => dishes = res);

    // when
    menuService.setAvailable(mockedDish);
    mockedBackend.expectNone('http://localhost:3000/dishes/' + mockedDish.id);
    // then
    expect(menuService.setAvailable).toHaveBeenCalled();
  });
});
