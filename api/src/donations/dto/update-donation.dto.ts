import { Field, Float, InputType } from '@nestjs/graphql';
import { ArticleType } from 'donations/entities/enums/donation.enum';
import { Tracking } from 'donations/entities/tracking.entity';
import { Binary } from 'mongodb';

@InputType()
export class UpdateDonationInput {
  @Field(() => String)
    id: string;
  @Field(() => ArticleType, { nullable: true })
    type: ArticleType;
  @Field(() => Float, { nullable: true })
    cost: number;
  @Field(() => String, { nullable: true })
    picture: Buffer;
  @Field(() => String, { nullable: true })
    message: string;
  @Field(() => Boolean, { nullable: true })
    isDelivred: Boolean;
}
