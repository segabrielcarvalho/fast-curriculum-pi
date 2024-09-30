import { ArgsType, Field } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { CreateUserInput } from '../inputs/create-user.input';

@ArgsType()
export class CreateUserArgs {
   @Field(() => CreateUserInput, { nullable: false })
   @Type(() => CreateUserInput)
   data!: CreateUserInput;

   @Field(() => String, { nullable: false })
   password!: string;
}
