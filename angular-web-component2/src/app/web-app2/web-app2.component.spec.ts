import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebApp2Component } from './web-app2.component';

describe('WebApp2Component', () => {
  let component: WebApp2Component;
  let fixture: ComponentFixture<WebApp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebApp2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebApp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
