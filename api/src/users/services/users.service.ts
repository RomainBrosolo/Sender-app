import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { User } from '../entity/user.entity';
import { Collection, ObjectId } from 'mongodb';
import { InjectCollection } from 'nest-mongodb';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectCollection('users')
    private usersCollection: Collection<User>,
  ) {}

  async get(user: User): Promise<boolean> {

      const response = await this.usersCollection.findOne({
        login: user.login,
      });
      if (response) {
        const matched = this.comparePassword(user.password, response.password);
        if (!matched) {
          return false;
        }
        else {
          return true;
        }
      }
      else {
        return false;
      }
      
  }

  encodePassword (rawPassword: string) {
    const salt = bcrypt.genSaltSync();
    return bcrypt.hash(rawPassword, salt);
  }
  
  comparePassword (rawPassword: string, hash: string) {
    return bcrypt.compareSync(rawPassword, hash);
  }
}
