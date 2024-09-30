import { Field, InputType } from '@nestjs/graphql';
import { StringFilter } from '../../graphql/inputs/prisma/string-filter.input';
import { DateTimeFilter } from '../../graphql/inputs/prisma/date-time-filter.input';
import { BoolFilter } from '../../graphql/inputs/prisma/bool-filter.input';
import { RoleEnumFilterEnum } from '../filters/role-enum-filter-input';

@InputType()
export class ListUsersInput {
   @Field(() => [ListUsersInput], { nullable: true })
   AND?: Array<ListUsersInput>;

   @Field(() => [ListUsersInput], { nullable: true })
   OR?: Array<ListUsersInput>;

   @Field(() => [ListUsersInput], { nullable: true })
   NOT?: Array<ListUsersInput>;

   @Field(() => StringFilter, { nullable: true })
   id?: StringFilter;

   @Field(() => DateTimeFilter, { nullable: true })
   createdAt?: DateTimeFilter;

   @Field(() => DateTimeFilter, { nullable: true })
   updatedAt?: DateTimeFilter;

   @Field(() => StringFilter, { nullable: true })
   name?: StringFilter;

   @Field(() => StringFilter, { nullable: true })
   email?: StringFilter;

   @Field(() => StringFilter, { nullable: true })
   document?: StringFilter;

   @Field(() => StringFilter, { nullable: true })
   password?: StringFilter;

   @Field(() => RoleEnumFilterEnum, { nullable: true })
   role?: RoleEnumFilterEnum;

   @Field(() => BoolFilter, { nullable: true })
   active?: BoolFilter;

   @Field(() => DateTimeFilter, { nullable: true })
   lastLogin?: DateTimeFilter;
}
