import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { NavbarComponent } from '../core/navbar/navbar.component';
import { CarosualComponent } from '../core/carosual/carosual.component';

import { PrimeNgModule } from '../core/prime-ng/prime-ng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, NavbarComponent, CarosualComponent],
      imports: [PrimeNgModule, FormsModule, ReactiveFormsModule, RouterTestingModule, BrowserAnimationsModule, HttpClientModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the onPolicySubmit method', async(() => {
    component.onPolicySubmit();
    spyOn(component, 'onPolicySubmit');
  }));

  it('should set showTable to true', () => {
    component.onPolicySubmit();
    expect(component.showTable).toBeFalsy();
  })
});
