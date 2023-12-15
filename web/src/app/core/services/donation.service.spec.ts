import { TestBed } from '@angular/core/testing';
import { Product, CategoryType, DeleteProductDocument } from '@types';
import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;
  let product: Product;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
    product = {
      _id: '1',
      name: 'product1',
      category: CategoryType.Cable,
      cost: 100,
      price: 100,
      updated: new Date(''),
      created: new Date(''),
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be return products', async () => {
    expect(service.getProducts().subscribe()).toBeDefined();
  });

  it('should be create product', async () => {
    service.createProduct(product);

    expect(
      service.getProduct(product._id).subscribe((res) => res.name)
    ).toBeDefined();
  });

  it('should be delete product', async () => {
    service.deleteProduct(product._id);

    expect(service.getProduct(product._id)).toBeUndefined;
  });

  it('should be update product', async () => {
    let nameUpdate = '';
    await service.updateProduct(product._id, {
      name: 'product_update',
    });
    await service
      .getProduct(product._id)
      .subscribe((res) => (nameUpdate = res.name));

    expect(nameUpdate).toEqual('product_update');
  });
});
