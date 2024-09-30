import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { MyLogger } from '../../../logger/my-logger.service';
import { CreateUserArgs } from '../../args/create-user.args';
import { faker } from '@faker-js/faker';
import { hash } from 'bcryptjs';
import { CreateUserInput } from '../../inputs/create-user.input';

@Injectable()
export class CreateUserService {
   constructor(
      private readonly logger: MyLogger,
      private readonly prisma: PrismaService,
   ) {
      logger.setContext(CreateUserService.name);
   }

   async run({ data, password }: CreateUserArgs) {
      await this.validateUniqueEmail(data.email);
      const user = await this.createUser(data, password);

      this.logger.log(`Usuário ${user.email} criado com sucesso`);
      return user;
   }

   private async validateUniqueEmail(email: string) {
      const emailInUse = await this.prisma.user.findUnique({
         where: { email },
      });
      if (emailInUse)
         throw new BadRequestException(
            'Já existe um usuário com o mesmo email.',
         );
   }

   private async createUser(data: CreateUserInput, password: string) {
      const coordinatorData =
         data.role === 'COORDINATOR' ? { Coordinator: { create: {} } } : {};

      data.email = data.email.toLowerCase();
      return await this.prisma.user.create({
         data: {
            ...data,
            ...coordinatorData,
            password: await this.encryptPassword(password),
         },
      });
   }

   private async encryptPassword(password?: string) {
      return hash(password || faker.internet.password(), 8);
   }
}
