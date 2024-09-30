import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class GetUserV2Service {
   constructor(private readonly prisma: PrismaService) {}

   async run(id: string) {
      const user = await this.prisma.user.findUnique({
         where: { id },
      });
      if (!user) throw new NotFoundException('User not found');

      return user;
   }
}
