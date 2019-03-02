/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NavFoterComponent } from './navFoter.component';

describe('NavFoterComponent', () => {
  let component: NavFoterComponent;
  let fixture: ComponentFixture<NavFoterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavFoterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavFoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
