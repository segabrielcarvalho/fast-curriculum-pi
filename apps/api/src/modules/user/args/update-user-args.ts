import { ArgsType, Field } from '@nestjs/graphql';
import { DefaultUpdateArgs } from '../../graphql/args/default-update-args';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { UpdateUserInput } from '../inputs/update-user.input';

@ArgsType()
export class UpdateUserArgs extends DefaultUpdateArgs {
   @ValidateNested()
   @Type(() => UpdateUserInput)
   @Field(() => UpdateUserInput)
   data!: UpdateUserInput;

   @Field(() => String, { nullable: true })
   avatarInBase64?: string;
}
