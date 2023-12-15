import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { Contributor, CreateContributorInput, UpdateContributorInput } from '@types';

export const loadContributors = createAction('[Contributor] Get Contributors');
export const loadContributorsSuccess = createAction(
  '[Contributor] Get Contributors success',
  props<{ contributors: Contributor[] }>()
);

export const addContributor = createAction(
  '[Contributor] Add Contributor',
  props<{ contributor: CreateContributorInput }>()
);
export const addContributorSuccess = createAction(
  '[Contributor] Add Contributor success',
  props<{ contributor: Contributor }>()
);

export const deleteContributor = createAction(
  '[Contributor] Delete Contributor',
  props<{ id: string }>()
);
export const deleteContributorSuccess = createAction(
  '[Contributor] Delete Contributor success',
  props<{ id: string }>()
);

export const updateContributor = createAction(
  '[Contributor] Update Contributor',
  props<{ data: UpdateContributorInput }>()
);
export const updateContributorSuccess = createAction(
  '[Contributor] Update Contributor success',
  props<{ data: Contributor }>()
);
