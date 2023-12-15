import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { User } from '../entity/user.entity';
import { UsersService } from '../services/users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Mutation(() => Boolean, { name: 'check_user' })
  async getUser(@Args('user') user: User) {
    return await this.usersService.get(user);
  }
}
