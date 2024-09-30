import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { LoggerModule } from '../logger/logger.module';
import { CreateUserService } from './services/create/create-user.service';
import { GetUserService } from './services/get-user/get-user.service';
import { UserResolver } from './resolvers/user.resolver';
import { UserFieldsResolver } from './resolvers/user-fields.resolver';
import { ListUsersService } from './services/list/list-users.service';
import { UserListFieldsResolver } from './resolvers/user-list-fields.resolver';
import { GetUserV2Service } from './services/get-user-v2/get-user-v2.service';
import { UpdateUserService } from './services/update/update-user.service';

@Module({
   imports: [PrismaModule, LoggerModule],
   providers: [
      CreateUserService,
      GetUserService,
      GetUserV2Service,
      ListUsersService,
      UpdateUserService,

      UserResolver,
      UserFieldsResolver,
      UserListFieldsResolver,
   ],
})
export class UserModule {}
