import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sec2Component } from './sec2.component';

describe('Sec2Component', () => {
  let component: Sec2Component;
  let fixture: ComponentFixture<Sec2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sec2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sec2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
