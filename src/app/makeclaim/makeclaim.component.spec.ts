import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeclaimComponent } from './makeclaim.component';
import { NavbarComponent } from '../core/navbar/navbar.component';
import { CarosualComponent } from '../core/carosual/carosual.component';

import { PrimeNgModule } from '../core/prime-ng/prime-ng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('MakeclaimComponent', () => {
  let component: MakeclaimComponent;
  let fixture: ComponentFixture<MakeclaimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MakeclaimComponent, NavbarComponent, CarosualComponent],
      imports: [PrimeNgModule, FormsModule, ReactiveFormsModule, RouterTestingModule, BrowserAnimationsModule, HttpClientModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeclaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the addClaim method', () => {
    let claimVal = {}
    component.addClaim(claimVal);
  });

  it('should call the onUpload method', () => {
    let event: any
    component.onUpload(event);
  });

});
