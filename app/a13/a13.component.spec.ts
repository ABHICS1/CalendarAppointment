import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A13Component } from './a13.component';

describe('A13Component', () => {
  let component: A13Component;
  let fixture: ComponentFixture<A13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
