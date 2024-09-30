import { ArgsType, Field } from '@nestjs/graphql';
import { FindManyDefaultArgs } from '../../graphql/args/find-many-default-args';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ListUsersInput } from '../inputs/list-users.input';

@ArgsType()
export class ListUsersArgs extends FindManyDefaultArgs {
   @ValidateNested()
   @Type(() => ListUsersInput)
   @Field(() => ListUsersInput, { nullable: true })
   where?: ListUsersInput;
}
