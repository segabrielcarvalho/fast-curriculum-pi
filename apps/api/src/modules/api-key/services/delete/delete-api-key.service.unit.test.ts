import { TestBed } from '@automock/jest';
import { PrismaService } from '../../../prisma/prisma.service';
import { DeleteApiKeyService } from './delete-api-key.service';

describe('DeleteOneApiKeyService', () => {
   let deleteOneApiKeyService: DeleteApiKeyService;
   let prismaService: PrismaService;

   beforeAll(async () => {
      const { unit, unitRef } = TestBed.create(DeleteApiKeyService)
         .mock(PrismaService)
         .using({
            apiKeys: {
               findUnique: jest.fn().mockResolvedValue({ id: 'fake-key-id' }),
               delete: jest.fn().mockResolvedValue({
                  id: 'fake-key-id',
                  name: 'Chave de teste',
               }),
            },
         })
         .compile();

      deleteOneApiKeyService = unit;
      prismaService = unitRef.get(PrismaService);
   });

   it('Deleta uma chave de API com sucesso', async () => {
      const keyId = 'fake-key-id';
      const result = await deleteOneApiKeyService.run(keyId);

      expect(result).toMatchObject({
         id: 'fake-key-id',
         name: 'Chave de teste',
      });
      expect(prismaService.apiKeys.findUnique).toHaveBeenCalledWith({
         where: { id: keyId },
         select: { id: true },
      });

      expect(prismaService.apiKeys.delete).toHaveBeenCalledWith({
         where: { id: keyId },
         select: { id: true },
      });
   });
});
