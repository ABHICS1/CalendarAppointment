import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A15Component } from './a15.component';

describe('A15Component', () => {
  let component: A15Component;
  let fixture: ComponentFixture<A15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
