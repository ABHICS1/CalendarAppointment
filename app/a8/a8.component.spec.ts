import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A8Component } from './a8.component';

describe('A8Component', () => {
  let component: A8Component;
  let fixture: ComponentFixture<A8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
