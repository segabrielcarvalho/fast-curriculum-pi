import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RoleEnum } from '@prisma/client';
import { Authorized } from '../../auth/decorators/authorized.decorator';
import { ApiKeysObject } from '../objects/api-keys-object.ts';
import { CreateApiKeyService } from '../services/create/create-api-key.service';
import { DeleteApiKeyService } from '../services/delete/delete-api-key.service';
import { GetApiKeyService } from '../services/get/get-api-key.service';
import { ListApiKeysService } from '../services/list/list-api-keys.service';
import { ApiKeysArgs } from '../args/api-keys-args';

@Authorized(RoleEnum.ADMIN)
@Resolver(() => ApiKeysObject)
export class ApiKeyResolver {
   constructor(
      private readonly createApiKeyService: CreateApiKeyService,
      private readonly deleteApiKeyService: DeleteApiKeyService,
      private readonly getApiKeyService: GetApiKeyService,
      private readonly listApiKeysService: ListApiKeysService,
   ) {}

   @Mutation(() => ApiKeysObject)
   async createApiKey(@Args() args: ApiKeysArgs) {
      return this.createApiKeyService.run(args);
   }

   @Mutation(() => ApiKeysObject)
   async deleteApiKey(@Args('keyId') keyId: string) {
      return this.deleteApiKeyService.run(keyId);
   }

   @Query(() => ApiKeysObject)
   async getApiKey(@Args('keyId') keyId: string) {
      return this.getApiKeyService.run(keyId);
   }

   @Query(() => [ApiKeysObject])
   async listApiKeys() {
      return this.listApiKeysService.run();
   }
}
