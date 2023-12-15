import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { DonationsModule } from './donations/donations.module';
import { ContributorsModule } from 'contributors/contributors.module';
import { UsersModule } from 'users/users.module';

@Module({
  imports: [CoreModule, DonationsModule, ContributorsModule, UsersModule],
})
export class AppModule {}
