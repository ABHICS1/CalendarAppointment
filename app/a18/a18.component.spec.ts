import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A18Component } from './a18.component';

describe('A18Component', () => {
  let component: A18Component;
  let fixture: ComponentFixture<A18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
