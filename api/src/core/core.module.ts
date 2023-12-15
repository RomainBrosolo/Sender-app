import { Global, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { DatabaseModule } from './database/database.module';
import { MongoDBProvider } from './database/providers/mongodb.provider';

@Global()
@Module({
  imports: [
    DatabaseModule.forRootAsync({ useClass: MongoDBProvider }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/core/schema/schema.gql'),
    }),
  ],
})
export class CoreModule {}
