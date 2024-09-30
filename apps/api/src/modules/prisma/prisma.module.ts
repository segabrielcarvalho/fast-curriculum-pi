import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { ConfigModule } from '@nestjs/config';
import prismaConfig, { prismaConfigValidation } from './prisma.config';

@Module({
   imports: [
      ConfigModule.forRoot({
         cache: true,
         load: [prismaConfig],
         validationSchema: prismaConfigValidation,
      }),
   ],
   providers: [PrismaService],
   exports: [PrismaService],
})
export class PrismaModule {}
