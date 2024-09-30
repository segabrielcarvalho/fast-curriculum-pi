import { registerAs } from '@nestjs/config';
import * as Joi from 'joi';

const logConfig = registerAs('logger', () => {
   const getEnv = (envName: string) => process.env[envName];
   const toBool = (string: string) => (string === 'true' ? true : false);

   return {
      file: { enable: toBool(getEnv('LOG_ENABLE_FILE')) },
      logSene: {
         enable: toBool(getEnv('LOG_ENABLE_LOGSENE')),
         token: getEnv('LOGSENE_TOKEN'),
      },
      cloudWatch: {
         enable: toBool(getEnv('LOG_ENABLE_AWS_CLOUD_WATCH')),
         logGroupName: getEnv('AWS_CLOUD_WATCH_GROUP_NAME'),
         logStreamName: getEnv('AWS_CLOUD_WATCH_STREAM_NAME'),
         awsConfig: {
            region: getEnv('AWS_CLOUD_WATCH_REGION') || getEnv('AWS_REGION'),
            accessKeyId:
               getEnv('AWS_CLOUD_WATCH_ACCESS_KEY_ID') ||
               getEnv('AWS_ACCESS_KEY_ID'),
            secretAccessKey:
               getEnv('AWS_CLOUD_WATCH_SECRET_ACCESS_KEY') ||
               getEnv('AWS_SECRET_ACCESS_KEY'),
         },
      },
   };
});

export const logConfigValidation = Joi.object({
   LOG_ENABLE_FILE: Joi.boolean().default(true),

   LOG_ENABLE_LOGSENE: Joi.boolean().default(false),
   LOGSENE_TOKEN: Joi.string(),

   LOG_ENABLE_AWS_CLOUD_WATCH: Joi.boolean().default(false),
   AWS_CLOUD_WATCH_GROUP_NAME: Joi.string(),
   AWS_CLOUD_WATCH_STREAM_NAME: Joi.string(),
   AWS_CLOUD_WATCH_REGION: Joi.string(),
   AWS_REGION: Joi.string(),
   AWS_CLOUD_WATCH_ACCESS_KEY_ID: Joi.string(),
   AWS_ACCESS_KEY_ID: Joi.string(),
   AWS_CLOUD_WATCH_SECRET_ACCESS_KEY: Joi.string(),
   AWS_SECRET_ACCESS_KEY: Joi.string(),
})
   .when(
      Joi.object({ LOG_ENABLE_LOGSENE: Joi.boolean().required().equal(true) }),
      {
         then: Joi.object({ LOGSENE_TOKEN: Joi.required() }),
      },
   )
   .when(
      Joi.object({
         LOG_ENABLE_AWS_CLOUD_WATCH: Joi.boolean().required().equal(true),
      }),
      {
         then: Joi.object({
            AWS_CLOUD_WATCH_GROUP_NAME: Joi.required(),
            AWS_CLOUD_WATCH_STREAM_NAME: Joi.required(),
            AWS_CLOUD_WATCH_REGION: Joi.required(),
            AWS_REGION: Joi.required(),
            AWS_CLOUD_WATCH_ACCESS_KEY_ID: Joi.required(),
            AWS_ACCESS_KEY_ID: Joi.required(),
            AWS_CLOUD_WATCH_SECRET_ACCESS_KEY: Joi.required(),
            AWS_SECRET_ACCESS_KEY: Joi.required(),
         })
            .xor('AWS_CLOUD_WATCH_REGION', 'AWS_REGION')
            .xor('AWS_CLOUD_WATCH_ACCESS_KEY_ID', 'AWS_ACCESS_KEY_ID')
            .xor('AWS_CLOUD_WATCH_SECRET_ACCESS_KEY', 'AWS_SECRET_ACCESS_KEY'),
      },
   );

export default logConfig;
