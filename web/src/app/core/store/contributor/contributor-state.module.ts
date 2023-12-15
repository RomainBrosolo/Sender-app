import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromContributors from './contributor.reducers';
import { ContributorEffects } from './contributor.effects';

@NgModule({
  imports: [
    StoreModule.forFeature(
      fromContributors.contributorFeatureKey,
      fromContributors.ContributorReducer
    ),
    EffectsModule.forFeature([ContributorEffects]),
  ],
})
export class ContributorStateModule {}
