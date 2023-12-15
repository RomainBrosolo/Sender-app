import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Contributor } from '../entities/contributor.entity';
import { Collection, ObjectId } from 'mongodb';
import { InjectCollection } from 'nest-mongodb';
import { CreateContributorInput } from 'Contributors/dto/create-Contributor.dto';
import { UpdateContributorInput } from 'Contributors/dto/update-Contributor.dto';
import { Donation } from 'donations/entities/Donation.entity';

@Injectable()
export class ContributorsService {
  constructor(
    @InjectCollection('contributors')
    private contributorsCollection: Collection<Contributor>,
    @InjectCollection('donations')
    private donationsCollection: Collection<Donation>,
  ) {}

  async findAll(): Promise<Contributor[]> {
    const response = await this.contributorsCollection.find({}).toArray();
    return response;
  }

  async findOne(id: string): Promise<Contributor> {
    if (!ObjectId.isValid(id)) {
      throw new NotFoundException('Invalid ID');
    }

    const response = await this.contributorsCollection.findOne<Contributor>({
      _id: new ObjectId(id),
    });

    if (!response) {
      throw new NotFoundException();
    }
    return response;
  }

  async create(body: CreateContributorInput): Promise<Contributor> {
    const created = await this.contributorsCollection.insertOne({
      ...(body as Contributor),
      created: new Date(),
    });
    return await this.findOne(created.insertedId.toString());
  }

  async update(id: string, body: UpdateContributorInput): Promise<Contributor> {
    if (!ObjectId.isValid(id)) {
      throw new BadRequestException('Invalid ID');
    }

    const updated = await this.contributorsCollection.findOneAndUpdate(
      {
        _id: new ObjectId(id),
      },
      {
        $set: {
          firstname: body.firstname,
          lastname: body.lastname,
          email: body.email,
          instagram: body.instagram,
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

    const response = await this.contributorsCollection.findOneAndDelete({
      _id: new ObjectId(id),
    });

    await this.donationsCollection
      .deleteMany({
        contributor: new ObjectId(id).toHexString(),
      })
      .catch((reason) => {
        throw reason;
      });


    return !!response.ok;
  }
}
