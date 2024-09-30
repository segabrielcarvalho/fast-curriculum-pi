import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule as GQLModule } from '@nestjs/graphql';
import {
   ApolloServerPluginLandingPageLocalDefault,
   ApolloServerPluginLandingPageProductionDefault,
} from '@apollo/server/plugin/landingPage/default';
import { join } from 'path';

const isProduction = process.env.NODE_ENV === 'production';
const landingPagePlugin = isProduction
   ? ApolloServerPluginLandingPageProductionDefault()
   : ApolloServerPluginLandingPageLocalDefault({ footer: false });

@Module({
   imports: [
      GQLModule.forRoot<ApolloDriverConfig>({
         driver: ApolloDriver,
         autoSchemaFile: join(process.cwd(), 'src/modules/graphql/schema.gql'),
         context: (context) => context,
         playground: false,
         sortSchema: true,
         plugins: [landingPagePlugin],
      }),
   ],
})
export class GraphQLModule {}
