import {
    Field,
    Float,
    ID,
    ObjectType,
    registerEnumType,
  } from '@nestjs/graphql';
  import { Binary, ObjectId } from 'mongodb';

@ObjectType()
  export class Tracking {
    @Field(() => String, { nullable: true })
    picture: Buffer;
    @Field(() => String, { nullable: true })
    message: string;
    @Field(() => Boolean)
    isDelivred: Boolean;
  }