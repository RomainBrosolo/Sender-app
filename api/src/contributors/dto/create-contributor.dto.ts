import { Field, Float, InputType } from '@nestjs/graphql';
import { Contributor } from '../entities/contributor.entity';

@InputType()
export class CreateContributorInput {
  @Field(() => String)
  firstname: string;
  @Field(() => String)
  lastname: string;
  @Field(() => String)
  email: string;
  @Field(() => String, { nullable: true })
  instagram: string;
}
