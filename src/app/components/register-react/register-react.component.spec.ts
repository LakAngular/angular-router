import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterReactComponent } from './register-react.component';

describe('RegisterReactComponent', () => {
  let component: RegisterReactComponent;
  let fixture: ComponentFixture<RegisterReactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterReactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterReactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
