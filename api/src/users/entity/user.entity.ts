import {
    Field,
    ID,
    InputType,
    ObjectType,
  } from '@nestjs/graphql';
  import { ObjectId } from 'mongodb';
  
@InputType()
export class User {
    @Field(() => ID, { nullable: true })
    _id: ObjectId;
    @Field(() => String)
    login: string;
    @Field(() => String)
    password: string;
}
  