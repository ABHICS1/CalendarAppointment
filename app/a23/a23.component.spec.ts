import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A23Component } from './a23.component';

describe('A23Component', () => {
  let component: A23Component;
  let fixture: ComponentFixture<A23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
