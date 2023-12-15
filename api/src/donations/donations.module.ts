import { Module } from '@nestjs/common';
import { MongoModule } from 'nest-mongodb';
import { DonationsService } from './services/donations.service';
import { DonationsResolver } from './resolvers/Donations.resolver';
import { HttpModule } from '@nestjs/axios';
import { ContributorsService } from 'contributors/services/contributors.service';

@Module({
  imports: [MongoModule.forFeature(['donations', 'contributors']), HttpModule],
  providers: [DonationsResolver, DonationsService, ContributorsService],
})
export class DonationsModule {}
