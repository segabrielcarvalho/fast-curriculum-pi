import { registerAs } from '@nestjs/config';
import * as Joi from '@hapi/joi';

enum environmentEnum {
   development = 'development',
   production = 'production',
   test = 'test',
}

const appConfig = registerAs('app', () => {
   const port = parseInt(process.env.PORT, 10) as number;
   const environment = process.env.NODE_ENV as keyof typeof environmentEnum;
   const baseApiUrl = process.env.BASE_API_URL as string;
   const baseWebUrl = process.env.BASE_WEB_URL as string;
   return { port, environment, baseApiUrl, baseWebUrl };
});

export const appConfigValidation = Joi.object({
   PORT: Joi.number().default(3000),
   BASE_API_URL: Joi.string(),
   BASE_WEB_URL: Joi.string(),
   NODE_ENV: Joi.string().default('development'),
});

export default appConfig;
