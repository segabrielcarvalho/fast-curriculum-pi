import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNumberString, IsOptional, IsUUID } from 'class-validator';

@InputType()
export class GetUserInput {
   @IsUUID()
   @IsOptional()
   @Field(() => String, { nullable: true })
   id?: string;

   @IsEmail()
   @IsOptional()
   @Field(() => String, { nullable: true })
   email?: string;

   @IsNumberString()
   @IsOptional()
   @Field(() => String, { nullable: true })
   document?: string;
}
