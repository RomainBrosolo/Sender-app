import { Module } from '@nestjs/common';
import { MongoModule } from 'nest-mongodb';
import { UsersService } from './services/users.service';
import { UsersResolver } from './resolvers/users.resolver';

@Module({
  imports: [MongoModule.forFeature(['users'])],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
