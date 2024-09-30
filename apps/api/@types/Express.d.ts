import { RoleEnum } from '@prisma/client';

declare global {
  namespace Express {
    interface User {
      id: string;
      role: RoleEnum;
      [key: string]: any;
    }
  }
}
