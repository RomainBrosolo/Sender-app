import { Field, Float, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateContributorInput {
  @Field(() => String)
    _id: string;
  @Field(() => String, { nullable: true })
    firstname: string;
  @Field(() => String, { nullable: true })
    lastname: string;
  @Field(() => String, { nullable: true })
    email: string;
  @Field(() => String, { nullable: true })
    instagram: string;
}
