import { Field, InputType } from '@nestjs/graphql';
import { RoleEnum } from '@prisma/client';

@InputType()
export class RoleEnumFilterEnum {
   @Field(() => RoleEnum, { nullable: true })
   equals?: keyof typeof RoleEnum;

   @Field(() => [RoleEnum], { nullable: true })
   in?: Array<keyof typeof RoleEnum>;

   @Field(() => [RoleEnum], { nullable: true })
   notIn?: Array<keyof typeof RoleEnum>;
}
