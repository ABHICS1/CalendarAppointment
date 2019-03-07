import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A20Component } from './a20.component';

describe('A20Component', () => {
  let component: A20Component;
  let fixture: ComponentFixture<A20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
