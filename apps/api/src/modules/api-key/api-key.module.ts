import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { ApiKeyResolver } from './resolver/api-key.resolver';
import { CreateApiKeyService } from './services/create/create-api-key.service';
import { DeleteApiKeyService } from './services/delete/delete-api-key.service';
import { GetApiKeyService } from './services/get/get-api-key.service';
import { ListApiKeysService } from './services/list/list-api-keys.service';
import { LoggerModule } from '../logger/logger.module';

@Module({
   imports: [PrismaModule, LoggerModule],
   providers: [
      ApiKeyResolver,
      GetApiKeyService,
      CreateApiKeyService,
      DeleteApiKeyService,
      ListApiKeysService,
   ],
})
export class ApiKeysModule {}
