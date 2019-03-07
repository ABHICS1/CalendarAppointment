import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A26Component } from './a26.component';

describe('A26Component', () => {
  let component: A26Component;
  let fixture: ComponentFixture<A26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
