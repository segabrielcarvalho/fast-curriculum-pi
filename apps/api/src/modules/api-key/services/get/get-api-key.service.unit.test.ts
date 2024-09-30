import { TestBed } from '@automock/jest';
import { PrismaService } from '../../../prisma/prisma.service';
import { GetApiKeyService } from './get-api-key.service';

describe('GetOneApiKeyService', () => {
   let getOneApiKeyService: GetApiKeyService;
   const mockApiKeys = { findUnique: jest.fn() };

   beforeAll(async () => {
      const { unit } = TestBed.create(GetApiKeyService)
         .mock(PrismaService)
         .using({
            apiKeys: mockApiKeys,
         })
         .compile();

      getOneApiKeyService = unit;
   });

   it('Obtém uma chave de API com sucesso', async () => {
      const keyId = 'fake-key-id';

      mockApiKeys.findUnique.mockResolvedValueOnce({
         id: 'fake-key-id',
         name: 'Chave de teste',
      });

      const result = await getOneApiKeyService.run(keyId);

      expect(result).toMatchObject({
         id: 'fake-key-id',
         name: 'Chave de teste',
      });
      expect(mockApiKeys.findUnique).toHaveBeenCalledWith({
         where: { id: keyId },
      });
   });
});
