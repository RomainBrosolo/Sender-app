import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { CreateContributorInput } from '../dto/create-contributor.dto';
import { UpdateContributorInput } from '../dto/update-contributor.dto';
import { Contributor } from '../entities/contributor.entity';
import { ContributorsService } from '../services/contributors.service';

@Resolver(() => Contributor)
export class ContributorsResolver {
  constructor(private contributorsService: ContributorsService) {}

  @Query(() => [Contributor], { name: 'contributors' })
  async getContributors() {
    const results = await this.contributorsService.findAll();
    return results;
  }

  @Query(() => Contributor, { name: 'contributor' })
  async getContributor(@Args('id') id: string): Promise<Contributor> {
    return await this.contributorsService.findOne(id);
  }

  @Mutation(() => Contributor, { name: 'create_contributor' })
  async createContributor(@Args('createContributor') createContributor: CreateContributorInput) {
    return await this.contributorsService.create(createContributor);
  }

  @Mutation(() => Contributor, { name: 'update_contributor' })
  async updateContributor(
    @Args('updateContributorInput') updateContributorInput: UpdateContributorInput,
  ) {
    return await this.contributorsService.update(updateContributorInput._id, updateContributorInput);
  }

  @Mutation(() => Boolean, { name: 'delete_contributor' })
  async deleteContributor(@Args('id') id: string) {
    return await this.contributorsService.delete(id);
  }
}
