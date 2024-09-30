import { Resolver } from '@nestjs/graphql';
import { PrismaService } from '../../prisma/prisma.service';
import { UserObject } from '../objects/user.object';

@Resolver(() => UserObject)
export class UserFieldsResolver {
   constructor(private readonly prisma: PrismaService) {}
}
