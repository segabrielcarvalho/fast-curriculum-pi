import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserObject } from '../objects/user.object';
import { CreateUserService } from '../services/create/create-user.service';
import { CreateUserArgs } from '../args/create-user.args';
import { GetUserArgs } from '../args/get-user.args';
import { GetUserService } from '../services/get-user/get-user.service';
import { ListUsersService } from '../services/list/list-users.service';
import { ListUsersArgs } from '../args/list-users.args';
import { UsersListObject } from '../objects/user-list.object';
import { Public } from '../../auth/decorators/public.decorator';
import { GetUserV2Service } from '../services/get-user-v2/get-user-v2.service';
import { UpdateUserService } from '../services/update/update-user.service';
import { UpdateUserArgs } from '../args/update-user-args';
import { CurrentUser } from '../../auth/decorators/current-user.decorator';
import { ICurrentUser } from '../../auth/auth.types';

@Resolver(() => UserObject)
export class UserResolver {
   constructor(
      private readonly getUserService: GetUserService,
      private readonly getUserV2Service: GetUserV2Service,
      private readonly createUserService: CreateUserService,
      private readonly listUsersService: ListUsersService,
      private readonly updateUserService: UpdateUserService,
   ) {}

   @Public()
   @Mutation(() => UserObject)
   createUser(@Args() args: CreateUserArgs) {
      return this.createUserService.run(args);
   }

   @Public()
   @Query(() => UserObject)
   getUser(@Args() args: GetUserArgs) {
      return this.getUserService.run(args);
   }

   @Public()
   @Query(() => UserObject)
   getUserV2(@Args('id') id: string) {
      return this.getUserV2Service.run(id);
   }

   @Query(() => UsersListObject)
   listUsers(@Args() args: ListUsersArgs) {
      return this.listUsersService.run(args);
   }

   @Mutation(() => UserObject)
   updateUser(@Args() args: UpdateUserArgs, @CurrentUser() user: ICurrentUser) {
      return this.updateUserService.run(args, user);
   }
}
