import * as Joi from '@hapi/joi';
import { registerAs } from '@nestjs/config';
import { Prisma } from '@prisma/client';

export interface PrismaConfigType {
   log: Prisma.LogLevel[];
   errorFormat: Prisma.ErrorFormat;
}

const prismaConfig = registerAs('prisma', () => {
   const getEnv = (envName: string) => process.env[envName];
   const toBool = (string: string) => (string === 'true' ? true : false);

   const log: Prisma.LogLevel[] = [];

   if (toBool(getEnv('PRISMA_LOG_ERROR'))) log.push('error');
   if (toBool(getEnv('PRISMA_LOG_WARN'))) log.push('warn');
   if (toBool(getEnv('PRISMA_LOG_INFO'))) log.push('info');
   if (toBool(getEnv('PRISMA_LOG_QUERY'))) log.push('query');

   const errorFormat = getEnv('PRISMA_ERROR_FORMAT') as Prisma.ErrorFormat;

   return { log, errorFormat };
});

export const prismaConfigValidation = Joi.object({
   PRISMA_LOG_ERROR: Joi.boolean().default(false),
   PRISMA_LOG_WARN: Joi.boolean().default(false),
   PRISMA_LOG_INFO: Joi.boolean().default(false),
   PRISMA_LOG_QUERY: Joi.boolean().default(false),
   PRISMA_ERROR_FORMAT: Joi.string().default('pretty'),
});

export default prismaConfig;
