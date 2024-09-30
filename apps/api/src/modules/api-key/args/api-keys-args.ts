import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class ApiKeysArgs {
   @Field(() => String, { nullable: false })
   name!: string;
}
