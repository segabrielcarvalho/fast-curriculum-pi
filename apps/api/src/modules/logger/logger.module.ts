import { Module } from '@nestjs/common';
import { MyLogger } from './my-logger.service';
import { ConfigModule } from '@nestjs/config';
import logConfig, { logConfigValidation } from './logger.config';

@Module({
   imports: [
      ConfigModule.forRoot({
         cache: true,
         load: [logConfig],
         validationSchema: logConfigValidation,
      }),
   ],
   providers: [MyLogger],
   exports: [MyLogger],
})
export class LoggerModule {}
