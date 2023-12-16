import {
  Field,
  ID,
  ObjectType,
} from '@nestjs/graphql';
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
}

@ObjectType()
export class ListDonation {
  @Field(() => ID)
  _id: ObjectId;
}
