import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterNeedsComponent } from './register-needs.component';

describe('RegisterNeedsComponent', () => {
  let component: RegisterNeedsComponent;
  let fixture: ComponentFixture<RegisterNeedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterNeedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterNeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
