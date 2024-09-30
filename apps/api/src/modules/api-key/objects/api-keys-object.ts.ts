import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IsBoolean, IsDate, IsString, IsUUID } from 'class-validator';

@ObjectType()
export class ApiKeysObject {
   @IsUUID()
   @Field(() => ID, { nullable: false })
   id!: string;

   @IsDate()
   @Field(() => Date, { nullable: false })
   createdAt!: Date;

   @IsDate()
   @Field(() => Date, { nullable: false })
   updatedAt!: Date;

   @IsBoolean()
   @Field(() => Boolean, { nullable: false })
   isActive!: boolean;

   @IsString()
   @Field(() => String, { nullable: false })
   name!: string;

   @IsString()
   @Field(() => String, { nullable: false })
   key!: string;
}
