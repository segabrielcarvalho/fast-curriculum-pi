import { InputType, PartialType, PickType } from '@nestjs/graphql';
import { UserObject } from '../objects/user.object';

@InputType()
export class UpdateUserInput extends PartialType(
   PickType(UserObject, ['name', 'email', 'isActive'] as const, InputType),
) {}
