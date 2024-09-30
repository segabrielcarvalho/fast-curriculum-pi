import { Module, Provider } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import '../graphql/enums';
import appConfig, { appConfigValidation } from './app.config';
import { GraphQLModule } from '../graphql/graphql.module';
import { LoggerModule } from '../logger/logger.module';
import { PrismaModule } from '../prisma/prisma.module';
import { ShortenedLinksModule } from '../shortened-links/shortened-links.module';
import { AuthModule } from '../auth/auth.module';
import { ApiKeysModule } from '../api-key/api-key.module';

const imports = [
   ConfigModule.forRoot({
      cache: true,
      load: [appConfig],
      validationSchema: appConfigValidation,
   }),
   GraphQLModule,
   LoggerModule,
   PrismaModule,
   AuthModule,
   ApiKeysModule,
   ShortenedLinksModule,
];

const controllers = [];
const providers: Provider[] = [];

@Module({ imports, controllers, providers })
export class AppModule {}
