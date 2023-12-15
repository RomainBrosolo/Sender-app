import { Injectable } from '@angular/core';
import {
  CreateDonationDocument,
  GetDonationsDocument,
  GetDonationDocument,
  Donation,
  UpdateDonationDocument,
  DeleteDonationDocument,
  UpdateDonationInput,
  CreateDonationInput,
} from '@types';
import { Apollo } from 'apollo-angular';
import { map, find } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DonationService {

  public resultat?: any;
  constructor(private apollo: Apollo) {}

  getDonations() {
    return this.apollo
      .watchQuery({
        query: GetDonationsDocument,
      })
      .valueChanges.pipe(
        map((result: any) => {
          return result.data.donations;
        })
      );
  }

  getDonation(id: string) {
    return this.apollo
      .query({
        query: GetDonationDocument,
        variables: {
          id: id,
        },
      })
      .pipe(
        map((result: any) => {
          return result.data.donation;
        })
      );
  }

  createDonation(donation: CreateDonationInput) {
    return this.apollo.mutate<{ create_donation: Donation}>({
      mutation: CreateDonationDocument,
      refetchQueries: [{ query: GetDonationsDocument }],
      variables: {
        createDonation: donation
      },
    }).pipe(map((results) => results.data!.create_donation));
  }

  updateDonation(donation: UpdateDonationInput) {
    return this.apollo.mutate<{ update_donation: Donation}>({
      mutation: UpdateDonationDocument,
      refetchQueries: [{ query: GetDonationsDocument }],
      variables: {
        updateDonationInput: donation,
      },
    }).pipe(map((results) => results.data!.update_donation));
  }

  deleteDonation(id: string) {
    return this.apollo.mutate({
      mutation: DeleteDonationDocument,
      refetchQueries: [{ query: GetDonationsDocument }],
      variables: {
        id: id,
      },
    });

  }
}
