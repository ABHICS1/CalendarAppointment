import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A28Component } from './a28.component';

describe('A28Component', () => {
  let component: A28Component;
  let fixture: ComponentFixture<A28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
