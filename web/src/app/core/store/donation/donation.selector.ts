import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Donation } from '@types';
import { donationsAdapter, AppState } from './donation.state';
import * as fromDonations from '../donation/donation.reducers';

export const selectDonationState = createFeatureSelector<AppState>(
  fromDonations.donationFeatureKey
);
export const getAllDonations: (state: AppState) => Donation[] =
  donationsAdapter.getSelectors().selectAll;

export const selectAllDonations = createSelector(
  selectDonationState,
  getAllDonations
);

export const selectDonationById = (id: string) =>
  createSelector(selectAllDonations, (donations: Donation[]) => {
  return donations?.find((p) => p._id === id);
});