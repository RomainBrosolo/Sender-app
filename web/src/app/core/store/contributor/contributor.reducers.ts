import { createReducer, on } from '@ngrx/store';
import { Contributor } from '@types';
import {
  addContributorSuccess,
  deleteContributorSuccess,
  loadContributorsSuccess,
  updateContributorSuccess,
} from './contributor.action';
import { initialState, contributorsAdapter } from './contributor.state';

export const contributorFeatureKey = 'contributors';

export const ContributorReducer = createReducer(
  initialState,
  on(loadContributorsSuccess, (state, action) => {
    return contributorsAdapter.setAll(action.contributors, {
      ...state,
    });
  }),
  on(addContributorSuccess, (state, action) => {
    return contributorsAdapter.addOne(action.contributor, {
      ...state,
    });
  }),
  on(updateContributorSuccess, (state, action) => ({
    ...state
  })),
  on(deleteContributorSuccess, (state, { id }) => {
    return contributorsAdapter.removeOne(id, state);
  })
);
