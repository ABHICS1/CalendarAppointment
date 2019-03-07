import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A17Component } from './a17.component';

describe('A17Component', () => {
  let component: A17Component;
  let fixture: ComponentFixture<A17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
