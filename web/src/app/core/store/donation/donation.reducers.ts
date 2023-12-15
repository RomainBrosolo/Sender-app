import { createReducer, on } from '@ngrx/store';
import { Donation } from '@types';
import {
  addDonationSuccess,
  deleteDonationSuccess,
  loadDonationsSuccess,
  updateDonationSuccess,
} from './donation.action';
import { initialState, donationsAdapter } from './donation.state';

export const donationFeatureKey = 'donations';

export const donationReducer = createReducer(
  initialState,
  on(loadDonationsSuccess, (state, action) => {
    return donationsAdapter.setAll(action.donations, {
      ...state,
    });
    // return { ...state, Donations: action.Donations };
  }),
  on(addDonationSuccess, (state, action) => {
    return donationsAdapter.addOne(action.donation, {
      ...state,
    });
  }),
  on(updateDonationSuccess, (state, action) => ({
    ...state
  })),
  on(deleteDonationSuccess, (state, {id}) => {
    return donationsAdapter.removeOne(id, state);
  })
);
