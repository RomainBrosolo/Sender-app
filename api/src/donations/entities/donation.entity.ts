import {
    Field,
    Float,
    ID,
    ObjectType,
    registerEnumType,
  } from '@nestjs/graphql';
  import { ObjectId } from 'mongodb';
import { ArticleType } from './enums/donation.enum';
import { Tracking} from './tracking.entity';
  
  @ObjectType()
  export class Donation {
    @Field(() => ID)
    _id: ObjectId;
    @Field(() => String)
    contributor: string;
    @Field(() => ArticleType)
    type: ArticleType;
    @Field(() => Float)
    cost: number;
    @Field(() => Tracking, { nullable: true })
    tracking: Tracking;
    @Field(() => Date)
    created: Date;
    @Field(() => Date, { nullable: true })
    updated: Date;
  }

  
  
  
  
  