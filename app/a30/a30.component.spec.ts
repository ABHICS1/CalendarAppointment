import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A30Component } from './a30.component';

describe('A30Component', () => {
  let component: A30Component;
  let fixture: ComponentFixture<A30Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A30Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
