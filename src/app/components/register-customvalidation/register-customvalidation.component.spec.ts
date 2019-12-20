import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCustomvalidationComponent } from './register-customvalidation.component';

describe('RegisterCustomvalidationComponent', () => {
  let component: RegisterCustomvalidationComponent;
  let fixture: ComponentFixture<RegisterCustomvalidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterCustomvalidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCustomvalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
