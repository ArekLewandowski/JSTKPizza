import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MenuComponent} from './menu.component';
import {MenuService} from '../shared/menu.service';
import {HttpClient} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let service: MenuService;
  const menuServiceMock = {
    getDishes: jasmine.createSpy()
    ('getDishes')
  };


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [MenuComponent],
      providers: [{provide: MenuService, useValue: menuServiceMock},
        MenuService,
        HttpClient,
      ],
      imports: [RouterTestingModule]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    service = TestBed.get('menuService');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should works', () => {
    // when
    component.getDishes();
    // then
    expect(service.getDishes).toHaveBeenCalled();
  });
});
