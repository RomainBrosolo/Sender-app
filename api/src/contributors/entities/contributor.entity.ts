import {
  Field,
  Float,
  ID,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { Donation } from 'donations/entities/Donation.entity';
import { ObjectId } from 'mongodb';

@ObjectType()
export class Contributor {
  @Field(() => ID)
  _id: ObjectId;
  @Field(() => String)
  firstname: string;
  @Field(() => String)
  lastname: string;
  @Field(() => String)
  email: string;
  @Field(() => String, {nullable: true})
  instagram: string;
  @Field(() => Date)
  created: Date;
  @Field(() => Date, {nullable: true})
  updated: Date;
  @Field(() => [ListDonation], {nullable: true})
  donations?: ListDonation[];
}

@ObjectType()
export class ListDonation {
  @Field(() => ID)
  _id: ObjectId;
}
