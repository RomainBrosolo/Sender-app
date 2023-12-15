import { Field, Float, InputType } from '@nestjs/graphql';
import { ArticleType } from 'donations/entities/enums/donation.enum';

@InputType()
export class CreateDonationInput {
  @Field(() => String)
  contributor: string;
  @Field(() => ArticleType)
  type: ArticleType;
  @Field(() => Float)
  cost: number;
  @Field(() => Date, { nullable: true })
  created: Date;
}
