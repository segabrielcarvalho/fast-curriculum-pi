import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class DeleteApiKeyService {
   constructor(private readonly prisma: PrismaService) {}

   async run(keyId: string) {
      try {
         const key = await this.prisma.apiKeys.findUnique({
            where: { id: keyId },
            select: { id: true, name: true },
         });

         if (!key) throw new Error('Chave de API não encontrada');

         const deletedKey = await this.prisma.apiKeys.delete({
            where: { id: key.id },
            select: { id: true, name: true },
         });

         return deletedKey;
      } catch (error) {
         return error;
      }
   }
}
