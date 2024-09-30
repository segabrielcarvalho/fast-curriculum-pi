import { Query, Resolver } from '@nestjs/graphql';
import { CurrentUser } from '../../auth/decorators/current-user.decorator';
import { ICurrentUser } from '../../auth/auth.types';
import { MeService } from '../services/me/me-service/me-service.service';
import { UserObject } from '../objects/user.object';

@Resolver(() => UserObject)
export class MeResolver {
   constructor(private readonly meService: MeService) {}

   @Query(() => UserObject)
   async me(@CurrentUser() user: ICurrentUser) {
      return this.meService.run(user);
   }
}
