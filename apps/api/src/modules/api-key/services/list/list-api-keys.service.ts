import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class ListApiKeysService {
   constructor(private readonly prisma: PrismaService) {}

   async run() {
      return this.prisma.apiKeys.findMany({ orderBy: { name: 'asc' } });
   }
}
