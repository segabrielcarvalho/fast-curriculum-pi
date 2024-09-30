import { ObjectType } from '@nestjs/graphql';
import { UserObject } from './user.object';

@ObjectType()
export class UserObjectForList extends UserObject {}
