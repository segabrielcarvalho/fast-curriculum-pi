import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { ApiKeysArgs } from '../../args/api-keys-args';
import * as crypto from 'crypto';
import { MyLogger } from '../../../logger/my-logger.service';

@Injectable()
export class CreateApiKeyService {
   constructor(
      private readonly prisma: PrismaService,
      private readonly logger: MyLogger,
   ) {}

   async run(args: ApiKeysArgs) {
      try {
         const newKey = await this.generateUniqueApiKey(args.name);
         const apiKey = await this.prisma.apiKeys.create({
            data: { key: newKey, ...args },
         });
         this.logger.log(`API Key created: ${apiKey.name}`);
         return apiKey;
      } catch (error) {
         throw new Error('Erro ao criar a chave API');
      }
   }

   private async generateUniqueApiKey(prefix: string): Promise<string> {
      let isUnique = false;
      let apiKey: string;

      while (!isUnique) {
         apiKey = this.generateApiKey(prefix);
         const existingKey = await this.prisma.apiKeys.findUnique({
            where: { key: apiKey },
         });
         isUnique = !existingKey;
      }

      return apiKey;
   }

   private generateApiKey(prefix: string): string {
      const formattedPrefix = prefix.toLowerCase().replace(/[^a-z0-9]/g, '-');
      const segments = [];
      for (let i = 0; i < 3; i++) {
         segments.push(crypto.randomBytes(4).toString('hex'));
      }
      return `${formattedPrefix}-${segments.join('-')}`;
   }
}
