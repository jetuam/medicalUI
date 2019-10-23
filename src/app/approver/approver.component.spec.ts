import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproverComponent } from './approver.component';
import { NavbarComponent } from '../core/navbar/navbar.component';
import { CarosualComponent } from '../core/carosual/carosual.component';

import { PrimeNgModule } from '../core/prime-ng/prime-ng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('ApproverComponent', () => {
  let component: ApproverComponent;
  let fixture: ComponentFixture<ApproverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ApproverComponent, NavbarComponent, CarosualComponent],
      imports: [PrimeNgModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule, RouterTestingModule, HttpClientModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the onApprove method', () => {
    component.onClaimApprove();
    spyOn(component, 'onClaimApprove');
    expect(component.display).toBeFalsy();
  });

  it('should call the onFwd method', () => {
    component.onClaimFwd();
    spyOn(component, 'onClaimFwd');
  });

  it('should call the onReject method', () => {
    component.onClaimReject();
    spyOn(component, 'onClaimReject');
  });

  it('should call the onClaimView method', () => {
    let claim = {}
    component.onClaimView(claim);
  })
});
