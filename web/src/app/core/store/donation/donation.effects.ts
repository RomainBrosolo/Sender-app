import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { UpdateDonationInput } from '@types';
import { EMPTY, of } from 'rxjs';
import {
  catchError,
  concatMap,
  exhaustMap,
  map,
  mergeMap,
  tap,
} from 'rxjs/operators';
import { DonationService } from 'src/app/core/services/donation.service';
import {
  loadDonations,
  loadDonationsSuccess,
  addDonation,
  addDonationSuccess,
  deleteDonation,
  deleteDonationSuccess,
  updateDonation,
  updateDonationSuccess,
} from './donation.action';

@Injectable()
export class DonationEffects {
  constructor(
    private action: Actions,
    private donationService: DonationService,
    private _snackBar: MatSnackBar,
  ) {}

  loadDonations$ = createEffect(() => {
    return this.action.pipe(
      ofType(loadDonations),
      mergeMap(() => {
        return this.donationService.getDonations().pipe(
          map((data) => {
            return loadDonationsSuccess({ donations: data });
          })
        );
      })
    );
  });

  addDonation$ = createEffect(() =>
    this.action.pipe(
      ofType(addDonation),
      concatMap(({ donation }) =>
        this.donationService.createDonation(donation).pipe(
          map((newDonation: any) => addDonationSuccess({ donation: newDonation })),
          catchError(() => of({ type: '[Donation] Donation add Error' }))
        )
      )
    )
  );

  addDonationSucess$ = createEffect(() => {
    return this.action.pipe(
        ofType(addDonationSuccess),
        tap((action) => {
          this._snackBar.open(`Donation ${action.donation._id} created !`, 'Close', {
            duration: 2000,
            panelClass: ['snackbar'],
          });
        })
      )},{dispatch: false});

  deleteDonation$ = createEffect(() =>
    this.action.pipe(
      ofType(deleteDonation),
      mergeMap(({ id }) =>
        this.donationService.deleteDonation(id).pipe(
          map(() => deleteDonationSuccess({ id: id })),
          catchError(() => of({ type: '[Donation] Donation delete Error' }))
        )
      )
    )
  );

  deleteDonationSucess$ = createEffect(() => {
    return this.action.pipe(
        ofType(deleteDonationSuccess),
        tap((action) => {
          this._snackBar.open(`Donation ${action.id} deleted !`, 'Close', {
            duration: 2000,
            panelClass: ['snackbar'],
          });
        })
      )},{dispatch: false});

  updateDonation$ = createEffect(() => {
  return this.action.pipe(
      ofType(updateDonation),
      concatMap((action) =>
        this.donationService.updateDonation({...(action.data as UpdateDonationInput),}).pipe(
          map((data) =>
            updateDonationSuccess({ data })
          ),
          catchError(() => of({ type: '[Donation] Donation update Error' }))
        )
      )
    )});

    updateDonationSucess$ = createEffect(() => {
      return this.action.pipe(
          ofType(updateDonationSuccess),
          tap((action) => {
            this._snackBar.open(`Donation ${action.data._id} updated !`, 'Close', {
              duration: 2000,
              panelClass: ['snackbar'],
            });
          })
        )},{dispatch: false});
}
