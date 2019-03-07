import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A14Component } from './a14.component';

describe('A14Component', () => {
  let component: A14Component;
  let fixture: ComponentFixture<A14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
