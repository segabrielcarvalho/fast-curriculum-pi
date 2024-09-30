import { registerAs } from '@nestjs/config';
import * as Joi from 'joi';

const authConfig = registerAs('auth', () => {
   const secret = process.env.JWT_SECRET as string;
   const expiresIn = process.env.JWT_EXPIRES_IN as string;
   return {
      secret,
      signOptions: { expiresIn },
   };
});

export const authConfigValidation = Joi.object({
   JWT_SECRET: Joi.string().token().default('dev-jwt-secret'),
   JWT_EXPIRES_IN: Joi.string().default('30d'),
});

export default authConfig;
