import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { GetUserArgs } from '../../args/get-user.args';
import { Prisma } from '@prisma/client';

@Injectable()
export class GetUserService {
   constructor(private readonly prisma: PrismaService) {}

   async run({ where }: GetUserArgs) {
      if (!where.id && !where.email && !where.document) {
         throw new BadRequestException(
            'Pelo menos um campo deve ser fornecido para buscar o usuário.',
         );
      }

      const whereUniqueInput: Prisma.UserWhereUniqueInput = {} as any;
      if (where.id) whereUniqueInput.id = where.id;
      if (where.email) whereUniqueInput.email = where.email;

      const user = await this.prisma.user.findUnique({
         where: {
            id: where.id,
         },
      });

      return user;
   }
}
