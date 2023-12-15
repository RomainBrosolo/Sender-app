import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromDonations from './donation.reducers';
import { DonationEffects } from './donation.effects';

@NgModule({
  imports: [
    StoreModule.forFeature(
      fromDonations.donationFeatureKey,
      fromDonations.donationReducer
    ),
    EffectsModule.forFeature([DonationEffects]),
  ],
})
export class DonationStateModule {}
