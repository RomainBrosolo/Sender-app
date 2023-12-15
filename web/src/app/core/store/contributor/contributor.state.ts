import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Contributor } from '@types';

export interface AppState extends EntityState<Contributor> {}


export const contributorsAdapter = createEntityAdapter<Contributor>({
  selectId: (model) => model._id,
});

export const initialState: AppState = contributorsAdapter.getInitialState({});
