import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A10Component } from './a10.component';

describe('A10Component', () => {
  let component: A10Component;
  let fixture: ComponentFixture<A10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
