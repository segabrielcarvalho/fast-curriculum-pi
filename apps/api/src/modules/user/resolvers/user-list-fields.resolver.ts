import { Resolver } from '@nestjs/graphql';
import { UserFieldsResolver } from './user-fields.resolver';
import { UserObjectForList } from '../objects/user-object-for-list';

@Resolver(() => UserObjectForList)
export class UserListFieldsResolver extends UserFieldsResolver {}
