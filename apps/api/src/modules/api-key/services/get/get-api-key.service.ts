import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class GetApiKeyService {
   constructor(private readonly prisma: PrismaService) {}

   async run(keyId: string) {
      const key = await this.prisma.apiKeys.findUnique({
         where: { id: keyId },
      });
      if (!key) throw new BadRequestException('Chave de API não encontrada');

      return key;
   }
}
