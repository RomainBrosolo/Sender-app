import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseModule } from '../../core/database/database.module';
import { InMemoryProvider } from '../../core/database/providers/in-memory.provider';
import { MongoModule } from 'nest-mongodb';
import { CreateProductDto } from '../dto/create-contributor.dto';
import { UpdateProductDto } from '../dto/update-contributor.dto';
import { ProductsService } from './contributors.service';

describe('ProductsService', () => {
  let productService: ProductsService;
  let db: InMemoryProvider;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        DatabaseModule.forRootAsync({ useClass: InMemoryProvider }),
        MongoModule.forFeature(['products-test']),
      ],
      providers: [ProductsService],
    }).compile();

    productService = module.get<ProductsService>(ProductsService);
    const db = module.get<InMemoryProvider>(InMemoryProvider);
  });

  it('should be defined', () => {
    expect(productService).toBeDefined();
  });

  it('should find all products', () => {
    expect(productService.findAll).toBeDefined();
    const findAllProductsSpy = jest.spyOn(productService, 'findAll');
    productService.findAll();
    expect(findAllProductsSpy).toHaveBeenCalled();
  });

  it('should findOne product', () => {
    expect(productService.findOne).toBeDefined();
    const findOneProductSpy = jest.spyOn(productService, 'findOne');
    const Id = '1';
    productService.findOne(Id);
    expect(findOneProductSpy).toHaveBeenCalledWith(Id);
  });

  it('should create a product', () => {
    expect(productService.create).toBeDefined();
    const createProductSpy = jest.spyOn(productService, 'create');
    const dto = new CreateProductDto();
    productService.create(dto);
    expect(createProductSpy).toHaveBeenCalledWith(dto);
  });

  it('should delete a product', () => {
    expect(productService.delete).toBeDefined();
    const deleteProductSpy = jest.spyOn(productService, 'delete');
    const Id = '1';
    productService.delete(Id);
    expect(deleteProductSpy).toHaveBeenCalledWith(Id);
  });

  it('should update a product', () => {
    expect(productService.update).toBeDefined();
    const updateProductSpy = jest.spyOn(productService, 'update');
    const Id = '1';
    const dto = new UpdateProductDto();
    productService.update(Id, dto);
    expect(updateProductSpy).toHaveBeenCalledWith(Id, dto);
  });
});
