import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSearchBarComponent } from './product-search-bar.component';

describe('ProductSearchBarComponent', () => {
  let component: ProductSearchBarComponent;
  let fixture: ComponentFixture<ProductSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductSearchBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
