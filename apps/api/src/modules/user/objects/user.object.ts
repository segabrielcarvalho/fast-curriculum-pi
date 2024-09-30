import { Field, ID, ObjectType } from '@nestjs/graphql';
import { RoleEnum } from '@prisma/client';
import {
   IsBoolean,
   IsDate,
   IsEmail,
   IsEnum,
   IsOptional,
   IsString,
   IsUUID,
} from 'class-validator';

@ObjectType()
export class UserObject {
   @IsUUID()
   @Field(() => ID, { nullable: false })
   id!: string;

   @IsDate()
   @Field(() => Date)
   createdAt!: Date;

   @IsDate()
   @Field(() => Date)
   updatedAt!: Date;

   @IsString()
   @Field(() => String, { nullable: false })
   name!: string;

   @IsEmail()
   @Field(() => String, { nullable: false })
   email!: string;

   @IsString()
   @IsOptional()
   @Field(() => String, { nullable: true })
   document?: string;

   @IsEnum(RoleEnum)
   @Field(() => RoleEnum, { defaultValue: RoleEnum.USER })
   role!: keyof typeof RoleEnum;

   @IsBoolean()
   @IsOptional()
   @Field(() => Boolean, { nullable: true, defaultValue: true })
   isActive!: boolean;

   @IsDate()
   @IsOptional()
   @Field(() => Date, { nullable: true })
   lastLogin!: Date | null;
}
