import { ArgsType, Field } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { GetUserInput } from '../inputs/get-user.input';

@ArgsType()
export class GetUserArgs {
   @ValidateNested()
   @Type(() => GetUserInput)
   @Field(() => GetUserInput, { nullable: false })
   where!: GetUserInput;
}
