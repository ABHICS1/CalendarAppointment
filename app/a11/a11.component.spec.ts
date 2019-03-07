import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A11Component } from './a11.component';

describe('A11Component', () => {
  let component: A11Component;
  let fixture: ComponentFixture<A11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
