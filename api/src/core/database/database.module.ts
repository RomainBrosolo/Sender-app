import { DynamicModule, Module } from '@nestjs/common';
import { MongoModule, MongoModuleAsyncOptions } from 'nest-mongodb';

@Module({})
export class DatabaseModule {
  static async forRootAsync(
    options: MongoModuleAsyncOptions,
  ): Promise<DynamicModule> {
    return {
      module: DatabaseModule,
      imports: [MongoModule.forRootAsync(options)],
    };
  }
}
