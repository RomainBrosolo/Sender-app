import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Donation } from '../entities/Donation.entity';
import { Collection, ObjectId } from 'mongodb';
import { InjectCollection } from 'nest-mongodb';
import { CreateDonationInput } from 'donations/dto/create-Donation.dto';
import { UpdateDonationInput } from 'donations/dto/update-donation.dto';
import { Contributor } from 'contributors/entities/contributor.entity';
import { HttpService } from '@nestjs/axios';
import { ContributorsService } from 'contributors/services/contributors.service';

@Injectable()
export class DonationsService {
  constructor(
    @InjectCollection('donations')
    private donationsCollection: Collection<Donation>,
    @InjectCollection('contributors')
    private contributorsCollection: Collection<Contributor>,
  ) {}

  public dataAPI = [];

  async findAll(): Promise<Donation[]> {
    const response = await this.donationsCollection.find({}).toArray();
    return response;
  }

  async findOne(id: string): Promise<Donation> {
    if (!ObjectId.isValid(id)) {
      throw new NotFoundException('Invalid ID');
    }

    const response = await this.donationsCollection.findOne<Donation>({
      _id: new ObjectId(id),
    });

    if (!response) {
      throw new NotFoundException();
    }
    return response;
  }

  async create(body: CreateDonationInput): Promise<Donation> {
    const donation_id = new ObjectId();
    const created = await this.donationsCollection.insertOne({
      ...(body as Donation),
      _id: donation_id,
      created: body.created ? new Date(body.created) : new Date(),
      tracking: {isDelivred: body.type == 'Monnaie' ? true : false, picture: null, message: null},
      updated: body.type == 'Monnaie' ? new Date() : null,
    });

    await this.contributorsCollection.updateOne({_id: new ObjectId(body.contributor)},
      {
        $push: {
          donations: {
            _id: donation_id,
          }
        }
      }
    ).catch((reason) => { throw reason });
    return this.findOne(created.insertedId.toString());
  }

  async update(id: string, body: UpdateDonationInput): Promise<Donation> {
    if (!ObjectId.isValid(id)) {
      throw new BadRequestException('Invalid ID');
    }

    const updated = await this.donationsCollection.findOneAndUpdate(
      {
        _id: new ObjectId(id),
      },
      {
        $set: {
          type: body.type,
          cost: body.cost,
          tracking: {isDelivred: body.type == 'Monnaie' ? true : body.isDelivred, picture: body.picture, message: body.message},
          updated: new Date(),
        },
      },
    );

    return updated.value;
  }

  async delete(id: string): Promise<boolean> {
    if (!ObjectId.isValid(id)) {
      throw new BadRequestException('Invalid ID');
    }

    const response = await this.donationsCollection.findOneAndDelete({
      _id: new ObjectId(id),
    });

    await this.contributorsCollection.updateOne(
      {
        'donations._id': new ObjectId(id)
      },
      {
        $pull: {
          donations: {_id: new ObjectId(id)}
        }
      }
    ).catch((reason) => { throw reason});

    return !!response.ok;
  }
}
