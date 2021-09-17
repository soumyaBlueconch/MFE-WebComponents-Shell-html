import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebApp1Component } from './web-app1.component';

describe('WebApp1Component', () => {
  let component: WebApp1Component;
  let fixture: ComponentFixture<WebApp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebApp1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebApp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
