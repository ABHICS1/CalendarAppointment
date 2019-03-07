import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A27Component } from './a27.component';

describe('A27Component', () => {
  let component: A27Component;
  let fixture: ComponentFixture<A27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
