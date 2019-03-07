import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A16Component } from './a16.component';

describe('A16Component', () => {
  let component: A16Component;
  let fixture: ComponentFixture<A16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
