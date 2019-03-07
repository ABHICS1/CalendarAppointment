import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A19Component } from './a19.component';

describe('A19Component', () => {
  let component: A19Component;
  let fixture: ComponentFixture<A19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
