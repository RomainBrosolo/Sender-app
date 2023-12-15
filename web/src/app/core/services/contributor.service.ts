import { Injectable } from '@angular/core';
import {
  CreateContributorDocument,
  GetContributorsDocument,
  GetContributorDocument,
  Contributor,
  UpdateContributorDocument,
  CreateContributorInput,
  DeleteContributorDocument,
  UpdateContributorInput,
} from '@types';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ContributorService {
  constructor(private apollo: Apollo) {}

  getContributors() {
    return this.apollo
      .watchQuery({
        query: GetContributorsDocument,
      })
      .valueChanges.pipe(
        map((result: any) => {
          return result.data.contributors;
        })
      );
  }

  getContributor(id: string) {
    return this.apollo
      .query({
        query: GetContributorDocument,
        variables: {
          id: id,
        },
      })
      .pipe(
        map((result: any) => {
          return result.data.contributor;
        })
      );
  }

  createContributor(contributor: CreateContributorInput) {
    return this.apollo.mutate<{create_contributor: Contributor}>({
      mutation: CreateContributorDocument,
      refetchQueries: [{ query: GetContributorsDocument }],
      variables: {
        createContributor: contributor
      },
    }).pipe(map((results) => results.data!.create_contributor));
  }

  updateContributor(contributor: UpdateContributorInput) {
    return this.apollo.mutate<{update_contributor: Contributor}>({
      mutation: UpdateContributorDocument,
      refetchQueries: [{ query: GetContributorsDocument }],
      variables: {
        updateContributorInput: contributor,
      },
    }).pipe(map((results) => results.data!.update_contributor));
  }

  deleteContributor(id: string) {
    return this.apollo.mutate({
      mutation: DeleteContributorDocument,
      refetchQueries: [{ query: GetContributorsDocument }],
      variables: {
        id: id,
      },
    });
  }
}
