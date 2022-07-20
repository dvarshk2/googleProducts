import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GProductsComponent } from './g-products.component';

describe('GProductsComponent', () => {
  let component: GProductsComponent;
  let fixture: ComponentFixture<GProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
