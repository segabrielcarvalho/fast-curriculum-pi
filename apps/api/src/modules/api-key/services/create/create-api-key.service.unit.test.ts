import { TestBed } from '@automock/jest';
import { PrismaService } from '../../../prisma/prisma.service';
import { ApiKeysArgs } from '../../args/api-keys-args';
import { faker } from '@faker-js/faker';
import { CreateApiKeyService } from './create-api-key.service';

describe('CreateOneApiKeyService', () => {
   let createOneApiKeyService: CreateApiKeyService;
   let prismaService: PrismaService;

   beforeAll(async () => {
      const { unit, unitRef } = TestBed.create(CreateApiKeyService)
         .mock(PrismaService)
         .using({
            apiKeys: { create: jest.fn() },
         })
         .compile();

      createOneApiKeyService = unit;
      prismaService = unitRef.get(PrismaService);
   });

   it('Cria uma nova chave de API com sucesso', async () => {
      const apiKeysArgs: ApiKeysArgs = { name: 'Chave de teste' };

      faker.random.alphaNumeric = jest.fn().mockReturnValue('fake-api-key');
      await createOneApiKeyService.run(apiKeysArgs);

      expect(faker.random.alphaNumeric).toHaveBeenCalledWith(50);
      expect(prismaService.apiKeys.create).toHaveBeenCalledWith({
         data: { key: 'fake-api-key', name: apiKeysArgs.name },
         select: { id: true },
      });
   });
});
