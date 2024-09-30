import { InputType, PickType } from '@nestjs/graphql';
import { UserObject } from '../objects/user.object';

@InputType()
export class CreateUserInput extends PickType(
   UserObject,
   ['name', 'email', 'role', 'document'] as const,
   InputType,
) {}
