import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { UpdateDonationInput } from 'donations/dto/update-donation.dto';
import { CreateDonationInput } from '../dto/create-donation.dto';
import { Donation } from '../entities/Donation.entity';
import { DonationsService } from '../services/donations.service';

@Resolver(() => Donation)
export class DonationsResolver {
  constructor(private donationsService: DonationsService,) {}

  @Query(() => [Donation], { name: 'donations' })
  async getDonations() {
    const results = await this.donationsService.findAll();
    return results;
  }

  @Query(() => Donation, { name: 'donation' })
  async getDonation(@Args('id') id: string): Promise<Donation> {
    return await this.donationsService.findOne(id);
  }

  @Mutation(() => Donation, { name: 'create_donation' })
  async createDonation(@Args('createDonation') createDonation: CreateDonationInput) {
    return await this.donationsService.create(createDonation);
  }

  @Mutation(() => Donation, { name: 'update_donation' })
  async updateDonation(
    @Args('updateDonationInput') updateDonationInput: UpdateDonationInput,
  ) {
    return await this.donationsService.update(updateDonationInput.id, updateDonationInput);
  }

  @Mutation(() => Boolean, { name: 'delete_donation' })
  async deleteDonation(@Args('id') id: string) {
    return await this.donationsService.delete(id);
  }
}
