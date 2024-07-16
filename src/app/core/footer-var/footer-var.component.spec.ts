import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterVarComponent } from './footer-var.component';

describe('FooterVarComponent', () => {
  let component: FooterVarComponent;
  let fixture: ComponentFixture<FooterVarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterVarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterVarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
