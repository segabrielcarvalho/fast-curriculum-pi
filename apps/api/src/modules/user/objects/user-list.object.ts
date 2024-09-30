import { Field, ObjectType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { DefaultListObject } from '../../graphql/objects/default-list-object';
import { UserObjectForList } from './user-object-for-list';

@ObjectType()
export class UsersListObject extends DefaultListObject {
   @ValidateNested()
   @Field(() => [UserObjectForList])
   @Type(() => UserObjectForList)
   rows: UserObjectForList[];
}
