import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { UpdateUserArgs } from '../../args/update-user-args';
import { ICurrentUser } from '../../../auth/auth.types';
import { RoleEnum } from '@prisma/client';

@Injectable()
export class UpdateUserService {
   constructor(private readonly prisma: PrismaService) {}

   /**
    * Runs the update process for a user.
    * @param args - The arguments to update the user.
    * @param currentUser - The current user performing the operation.
    * @returns The updated user object.
    * @throws Error if the operation is not permitted.
    */
   async run(args: UpdateUserArgs, currentUser: ICurrentUser) {
      const user = await this.validateUserAccess(args.where.id, currentUser);
      return this.updateUserData(user.id, args);
   }

   /**
    * Validates if the current user has access to update the specified user.
    * @param userId - The ID of the user to update.
    * @param currentUser - The current user performing the operation.
    * @returns The user object if access is valid.
    * @throws Error if the user is not found or access is denied.
    */
   private async validateUserAccess(userId: string, currentUser: ICurrentUser) {
      const user = await this.findUserById(userId);
      if (
         !user ||
         (user.id !== currentUser.id && currentUser.role !== RoleEnum.ADMIN)
      ) {
         throw new Error('Você não tem permissão para editar este usuário');
      }
      return user;
   }

   /**
    * Finds a user by ID.
    * @param id - The ID of the user to find.
    * @returns The found user object.
    * @throws Error if the user is not found.
    */
   private async findUserById(id: string) {
      const user = await this.prisma.user.findUnique({
         where: { id },
         select: { id: true },
      });
      if (!user) {
         throw new Error('Usuário não encontrado');
      }
      return user;
   }

   /**
    * Updates the data of a user.
    * @param userId - The ID of the user to update.
    * @param data - The update data.
    * @returns The updated user object.
    */
   private async updateUserData(userId: string, args: UpdateUserArgs) {
      return this.prisma.user.update({
         where: { id: userId },
         data: args.data,
      });
   }
}
