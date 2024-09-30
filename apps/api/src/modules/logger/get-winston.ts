import { createLogger, format, transports } from 'winston';
import Logsene from 'winston-logsene';
import logConfig from './logger.config';
import { ConfigType } from '@nestjs/config';

const getWinston = (config: ConfigType<typeof logConfig>) => {
   const logger = createLogger();
   const { combine, timestamp, printf } = format;

   const messageFormat = printf((info) => {
      return `${info.timestamp} ${info.level}: ${info.message}`;
   });

   const logToFile = (level: string, filename: string) => {
      return new transports.File({
         level,
         filename: `${filename}.log`,
         dirname: 'logs',
         maxFiles: 1,
         maxsize: 4 * 1024 * 1024,
         format: combine(timestamp(), messageFormat),
      });
   };
   if (config.file.enable) {
      logger.add(logToFile('error', 'error'));
      logger.add(logToFile('warn', 'warn'));
      logger.add(logToFile('info', 'info'));
   }

   if (config.logSene.enable) {
      logger.add(
         new Logsene({
            token: config.logSene.token,
            format: combine(timestamp(), format.metadata()),
         }),
      );
   }

   return logger;
};

export default getWinston;
