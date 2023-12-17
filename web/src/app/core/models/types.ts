import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export enum ArticleType {
  AlimentationPack = 'alimentationPack',
  Custom = 'custom',
  EducationPack = 'educationPack',
  Monnaie = 'monnaie'
}

export type Contributor = {
  __typename?: 'Contributor';
  _id: Scalars['ID'];
  created: Scalars['DateTime'];
  email: Scalars['String'];
  firstname: Scalars['String'];
  instagram?: Maybe<Scalars['String']>;
  lastname: Scalars['String'];
  updated?: Maybe<Scalars['DateTime']>;
};

export type CreateContributorInput = {
  email: Scalars['String'];
  firstname: Scalars['String'];
  instagram?: InputMaybe<Scalars['String']>;
  lastname: Scalars['String'];
};

export type CreateDonationInput = {
  contributor: Scalars['String'];
  cost: Scalars['Float'];
  created?: InputMaybe<Scalars['DateTime']>;
  type: ArticleType;
};

export type Donation = {
  __typename?: 'Donation';
  _id: Scalars['ID'];
  contributor: Scalars['String'];
  cost: Scalars['Float'];
  created: Scalars['DateTime'];
  tracking?: Maybe<Tracking>;
  type: ArticleType;
  updated?: Maybe<Scalars['DateTime']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  check_user: Scalars['Boolean'];
  create_contributor: Contributor;
  create_donation: Donation;
  delete_contributor: Scalars['Boolean'];
  delete_donation: Scalars['Boolean'];
  update_contributor: Contributor;
  update_donation: Donation;
};


export type MutationCheck_UserArgs = {
  user: User;
};


export type MutationCreate_ContributorArgs = {
  createContributor: CreateContributorInput;
};


export type MutationCreate_DonationArgs = {
  createDonation: CreateDonationInput;
};


export type MutationDelete_ContributorArgs = {
  id: Scalars['String'];
};


export type MutationDelete_DonationArgs = {
  id: Scalars['String'];
};


export type MutationUpdate_ContributorArgs = {
  updateContributorInput: UpdateContributorInput;
};


export type MutationUpdate_DonationArgs = {
  updateDonationInput: UpdateDonationInput;
};

export type Query = {
  __typename?: 'Query';
  contributor: Contributor;
  contributors: Array<Contributor>;
  donation: Donation;
  donations: Array<Donation>;
};


export type QueryContributorArgs = {
  id: Scalars['String'];
};


export type QueryDonationArgs = {
  id: Scalars['String'];
};

export type Tracking = {
  __typename?: 'Tracking';
  isDelivred: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
};

export type UpdateContributorInput = {
  _id: Scalars['String'];
  email?: InputMaybe<Scalars['String']>;
  firstname?: InputMaybe<Scalars['String']>;
  instagram?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
};

export type UpdateDonationInput = {
  cost?: InputMaybe<Scalars['Float']>;
  id: Scalars['String'];
  isDelivred?: InputMaybe<Scalars['Boolean']>;
  message?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<ArticleType>;
};

export type User = {
  _id?: InputMaybe<Scalars['ID']>;
  login: Scalars['String'];
  password: Scalars['String'];
};

export type GetDonationsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDonationsQuery = { __typename?: 'Query', donations: Array<{ __typename?: 'Donation', _id: string, contributor: string, type: ArticleType, cost: number, created: any, updated?: any | null, tracking?: { __typename?: 'Tracking', isDelivred: boolean, picture?: string | null, message?: string | null } | null }> };

export type GetDonationQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetDonationQuery = { __typename?: 'Query', donation: { __typename?: 'Donation', _id: string, contributor: string, type: ArticleType, cost: number, created: any, updated?: any | null, tracking?: { __typename?: 'Tracking', isDelivred: boolean, picture?: string | null, message?: string | null } | null } };

export type GetContributorsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetContributorsQuery = { __typename?: 'Query', contributors: Array<{ __typename?: 'Contributor', _id: string, firstname: string, lastname: string, email: string, instagram?: string | null, created: any, updated?: any | null }> };

export type GetContributorQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetContributorQuery = { __typename?: 'Query', contributor: { __typename?: 'Contributor', _id: string, firstname: string, lastname: string, email: string, instagram?: string | null, created: any, updated?: any | null } };

export type CreateDonationMutationVariables = Exact<{
  createDonation: CreateDonationInput;
}>;


export type CreateDonationMutation = { __typename?: 'Mutation', create_donation: { __typename?: 'Donation', _id: string, contributor: string, type: ArticleType, cost: number, created: any, updated?: any | null, tracking?: { __typename?: 'Tracking', isDelivred: boolean, picture?: string | null, message?: string | null } | null } };

export type CreateContributorMutationVariables = Exact<{
  createContributor: CreateContributorInput;
}>;


export type CreateContributorMutation = { __typename?: 'Mutation', create_contributor: { __typename?: 'Contributor', _id: string, firstname: string, lastname: string, email: string, instagram?: string | null } };

export type UpdateDonationMutationVariables = Exact<{
  updateDonationInput: UpdateDonationInput;
}>;


export type UpdateDonationMutation = { __typename?: 'Mutation', update_donation: { __typename?: 'Donation', _id: string, contributor: string, type: ArticleType, cost: number, created: any, updated?: any | null, tracking?: { __typename?: 'Tracking', isDelivred: boolean, picture?: string | null, message?: string | null } | null } };

export type UpdateContributorMutationVariables = Exact<{
  updateContributorInput: UpdateContributorInput;
}>;


export type UpdateContributorMutation = { __typename?: 'Mutation', update_contributor: { __typename?: 'Contributor', _id: string, firstname: string, lastname: string, email: string, instagram?: string | null } };

export type DeleteContributorMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteContributorMutation = { __typename?: 'Mutation', delete_contributor: boolean };

export type DeleteDonationMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteDonationMutation = { __typename?: 'Mutation', delete_donation: boolean };

export type GetUserMutationVariables = Exact<{
  user: User;
}>;


export type GetUserMutation = { __typename?: 'Mutation', check_user: boolean };

export const GetDonationsDocument = gql`
    query getDonations {
  donations {
    _id
    contributor
    type
    cost
    tracking {
      isDelivred
      picture
      message
    }
    created
    updated
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetDonationsGQL extends Apollo.Query<GetDonationsQuery, GetDonationsQueryVariables> {
    override document = GetDonationsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetDonationDocument = gql`
    query getDonation($id: String!) {
  donation(id: $id) {
    _id
    contributor
    type
    cost
    tracking {
      isDelivred
      picture
      message
    }
    created
    updated
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetDonationGQL extends Apollo.Query<GetDonationQuery, GetDonationQueryVariables> {
    override document = GetDonationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetContributorsDocument = gql`
    query getContributors {
  contributors {
    _id
    firstname
    lastname
    email
    instagram
    created
    updated
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetContributorsGQL extends Apollo.Query<GetContributorsQuery, GetContributorsQueryVariables> {
    override document = GetContributorsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetContributorDocument = gql`
    query getContributor($id: String!) {
  contributor(id: $id) {
    _id
    firstname
    lastname
    email
    instagram
    created
    updated
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetContributorGQL extends Apollo.Query<GetContributorQuery, GetContributorQueryVariables> {
    override document = GetContributorDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateDonationDocument = gql`
    mutation createDonation($createDonation: CreateDonationInput!) {
  create_donation(createDonation: $createDonation) {
    _id
    contributor
    type
    cost
    tracking {
      isDelivred
      picture
      message
    }
    created
    updated
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateDonationGQL extends Apollo.Mutation<CreateDonationMutation, CreateDonationMutationVariables> {
    override document = CreateDonationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateContributorDocument = gql`
    mutation createContributor($createContributor: CreateContributorInput!) {
  create_contributor(createContributor: $createContributor) {
    _id
    firstname
    lastname
    email
    instagram
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateContributorGQL extends Apollo.Mutation<CreateContributorMutation, CreateContributorMutationVariables> {
    override document = CreateContributorDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateDonationDocument = gql`
    mutation updateDonation($updateDonationInput: UpdateDonationInput!) {
  update_donation(updateDonationInput: $updateDonationInput) {
    _id
    contributor
    type
    cost
    tracking {
      isDelivred
      picture
      message
    }
    created
    updated
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateDonationGQL extends Apollo.Mutation<UpdateDonationMutation, UpdateDonationMutationVariables> {
    override document = UpdateDonationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateContributorDocument = gql`
    mutation updateContributor($updateContributorInput: UpdateContributorInput!) {
  update_contributor(updateContributorInput: $updateContributorInput) {
    _id
    firstname
    lastname
    email
    instagram
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateContributorGQL extends Apollo.Mutation<UpdateContributorMutation, UpdateContributorMutationVariables> {
    override document = UpdateContributorDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteContributorDocument = gql`
    mutation deleteContributor($id: String!) {
  delete_contributor(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteContributorGQL extends Apollo.Mutation<DeleteContributorMutation, DeleteContributorMutationVariables> {
    override document = DeleteContributorDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteDonationDocument = gql`
    mutation deleteDonation($id: String!) {
  delete_donation(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteDonationGQL extends Apollo.Mutation<DeleteDonationMutation, DeleteDonationMutationVariables> {
    override document = DeleteDonationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetUserDocument = gql`
    mutation getUser($user: User!) {
  check_user(user: $user)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetUserGQL extends Apollo.Mutation<GetUserMutation, GetUserMutationVariables> {
    override document = GetUserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }