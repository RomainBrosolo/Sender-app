import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { UpdateContributorInput } from '@types';
import { EMPTY, of } from 'rxjs';
import {
  catchError,
  concatMap,
  exhaustMap,
  map,
  mergeMap,
  tap,
} from 'rxjs/operators';
import { ContributorService } from 'src/app/core/services/contributor.service';
import {
  loadContributors,
  loadContributorsSuccess,
  addContributor,
  addContributorSuccess,
  deleteContributor,
  deleteContributorSuccess,
  updateContributor,
  updateContributorSuccess,
} from './contributor.action';

@Injectable()
export class ContributorEffects {
  constructor(
    private action: Actions,
    private contributorService: ContributorService,
    private _snackBar: MatSnackBar,
  ) {}

  loadContributors$ = createEffect(() => {
    return this.action.pipe(
      ofType(loadContributors),
      mergeMap(() => {
        return this.contributorService.getContributors().pipe(
          map((data) => {
            return loadContributorsSuccess({ contributors: data });
          })
        );
      })
    );
  });

  createContributor$ = createEffect(() =>
    this.action.pipe(
      ofType(addContributor),
      concatMap(({ contributor }) =>
        this.contributorService.createContributor(contributor).pipe(
          map((newContributor: any) => addContributorSuccess({ contributor: newContributor })),
          catchError(() => of({ type: '[Contributor] Contributor add Error' }))
        )
      )
    )
  );

  createContributorSucess$ = createEffect(() => {
    return this.action.pipe(
        ofType(addContributorSuccess),
        tap((action) => {
          this._snackBar.open(`Contributor ${action.contributor.firstname} ${action.contributor.lastname} created !`, 'Close', {
            duration: 2000,
            panelClass: ['snackbar'],
          });
        })
      )},{dispatch: false});

  deleteContributor$ = createEffect(() =>
    this.action.pipe(
      ofType(deleteContributor),
      mergeMap(({ id }) =>
        this.contributorService.deleteContributor(id).pipe(
          map(() => deleteContributorSuccess({ id: id })),
          catchError(() => of({ type: '[Contributor] Contributor delete Error' }))
        )
      )
    )
  );

  deleteContributorSucess$ = createEffect(() => {
    return this.action.pipe(
        ofType(deleteContributorSuccess),
        tap((action) => {
          this._snackBar.open(`Contributor ${action.id} deleted !`, 'Close', {
            duration: 2000,
            panelClass: ['snackbar'],
          });
        })
      )},{dispatch: false});

  updateContributor$ = createEffect(() => {
  return this.action.pipe(
      ofType(updateContributor),
      concatMap((action) =>
        this.contributorService.updateContributor({...(action.data as UpdateContributorInput),}).pipe(
          map((data) =>
            updateContributorSuccess({ data })
          ),
          catchError(() => of({ type: '[Contributor] Contributor update Error' }))
        )
      )
    )});

    updateContributorSucess$ = createEffect(() => {
      return this.action.pipe(
          ofType(updateContributorSuccess),
          tap((action) => {
            this._snackBar.open(`Contributor ${action.data.firstname} updated !`, 'Close', {
              duration: 2000,
              panelClass: ['snackbar'],
            });
          })
        )},{dispatch: false});
}
