import { Test, TestingModule } from '@nestjs/testing';
import { ProductsResolver } from './contributors.resolver';
import { ProductsService } from '../services/contributors.service';
import { CategoryType, Product } from 'products/entities/product.entity';
import { CreateProductDto } from 'products/dto/create-product.dto';
import { ObjectId } from 'mongodb';

const product: Product = {
  _id: new ObjectId('2'),
  name: 'product1',
  category: CategoryType.cable,
  created: new Date('02/02/2022'),
  updated: new Date('02/02/2022'),
  cost: 1500,
  price: 1800,
};

const product_create: CreateProductDto = {
  name: 'product666',
  category: CategoryType.cable,
  cost: 1500,
  price: 1800,
};

describe('ProductResolver', () => {
  let resolver: ProductsResolver;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductsResolver,
        {
          provide: ProductsService,
          useFactory: () => ({
            findAll: jest.fn(() => [
              {
                ...product,
              },
            ]),
            findOne: jest.fn((id: string) => ({
              ...product,
            })),
          }),
        },
      ],
    }).compile();

    resolver = module.get<ProductsResolver>(ProductsResolver);
  });
  it('resolver should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should find all products', async () => {
    const products = await resolver.getProducts();
    expect(products).toContainEqual({
      id: '1',
      name: 'Cable',
      created: '02/02/2022',
      updated: '02/02/2022',
      cost: 1500,
      price: 1800,
    });
  });

  it('should find product', async () => {
    const result = await resolver.getProduct('2');
    expect(result).toEqual(product);
  });

  it('should create a product', async () => {
    const result = await resolver.createProduct(product_create);
    expect(result).toEqual({
      ...product_create,
    });
  });

  it('should update a product', async () => {
    const result = await resolver.updateProduct('2', {
      name: 'product_update',
      cost: 0,
      price: 0,
      category: CategoryType.cable,
    });
    expect(product.name).toEqual('product_update');
  });

  it('should delete a product', () => {
    expect(resolver.deleteProduct).toBeDefined();
  });
});
