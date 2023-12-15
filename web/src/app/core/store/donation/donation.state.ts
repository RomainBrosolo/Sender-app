import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Donation } from '@types';

export interface AppState extends EntityState<Donation> {}

export const donationsAdapter = createEntityAdapter<Donation>({
  selectId: (model) => model._id,
});

export const initialState: AppState = donationsAdapter.getInitialState({});
