import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFormarrayComponent } from './register-formarray.component';

describe('RegisterFormarrayComponent', () => {
  let component: RegisterFormarrayComponent;
  let fixture: ComponentFixture<RegisterFormarrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterFormarrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFormarrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
