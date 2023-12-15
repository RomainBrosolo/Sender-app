import { Module } from '@nestjs/common';
import { MongoModule } from 'nest-mongodb';
import { ContributorsService } from './services/contributors.service';
import { ContributorsResolver } from './resolvers/contributors.resolver';

@Module({
  imports: [MongoModule.forFeature(['contributors', 'donations'])],
  providers: [ContributorsResolver, ContributorsService],
})
export class ContributorsModule {}
