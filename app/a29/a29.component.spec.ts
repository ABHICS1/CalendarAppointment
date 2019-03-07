import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A29Component } from './a29.component';

describe('A29Component', () => {
  let component: A29Component;
  let fixture: ComponentFixture<A29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
