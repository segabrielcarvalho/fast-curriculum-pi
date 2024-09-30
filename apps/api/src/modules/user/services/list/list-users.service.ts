import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { ListUsersArgs } from '../../args/list-users.args';

@Injectable()
export class ListUsersService {
   constructor(private readonly prisma: PrismaService) {}

   async run(args: ListUsersArgs) {
      const userCount = await this.prisma.user.count({
         where: args.where,
      });
      const users = await this.prisma.user.findMany(args);
      return { rows: users, count: userCount };
   }
}
