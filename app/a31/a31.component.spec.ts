import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A31Component } from './a31.component';

describe('A31Component', () => {
  let component: A31Component;
  let fixture: ComponentFixture<A31Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A31Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
