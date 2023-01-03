import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEditComponent } from './product-edit.component';

describe('ProductEditComponent', () => {
  let component: ProductEditComponent;
  let fixture: ComponentFixture<ProductEditComponent>;
  //it creates a dynamic testing module and puts this configuration , before each test
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductEditComponent ]
    })
    //out component is not only .ts , .css, .html
    .compileComponents();

    fixture = TestBed.createComponent(ProductEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});