import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { CreateDonationInput, Donation, UpdateDonationInput } from '@types';

export const loadDonations = createAction('[Donation] Get Donations');
export const loadDonationsSuccess = createAction(
  '[Donation] Get Donations success',
  props<{ donations: Donation[] }>()
);

export const addDonation = createAction(
  '[Donation] Add Donation',
  props<{ donation: CreateDonationInput }>()
);
export const addDonationSuccess = createAction(
  '[Donation] Add Donation success',
  props<{ donation: Donation }>()
);

export const deleteDonation = createAction(
  '[Donation] Delete Donation',
  props<{ id: string }>()
);
export const deleteDonationSuccess = createAction(
  '[Donation] Delete Donation success',
  props<{ id: string }>()
);

export const updateDonation = createAction(
  '[Donation] Update Donation',
  props<{ data: UpdateDonationInput }>()
);
export const updateDonationSuccess = createAction(
  '[Donation] Update Donation success',
  props<{ data: Donation }>()
);
