import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Contributor } from '@types';
import { contributorsAdapter, AppState } from './contributor.state';
import * as fromContributors from '../contributor/contributor.reducers';

export const selectContributorState = createFeatureSelector<AppState>(
  fromContributors.contributorFeatureKey
);
export const getAllContributors: (state: AppState) => Contributor[] =
  contributorsAdapter.getSelectors().selectAll;

export const selectAllContributors = createSelector(
  selectContributorState,
  getAllContributors
);

