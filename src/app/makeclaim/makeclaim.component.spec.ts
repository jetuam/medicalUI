import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeclaimComponent } from './makeclaim.component';

describe('MakeclaimComponent', () => {
  let component: MakeclaimComponent;
  let fixture: ComponentFixture<MakeclaimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeclaimComponent ]
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
});
