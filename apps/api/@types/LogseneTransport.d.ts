declare module 'winston-logsene' {
  import * as stream from 'stream';
  import * as logform from 'logform';

  declare class TransportStream extends stream.Writable {
    public format?: logform.Format;
    public level?: string;
    public silent?: boolean;
    public handleExceptions?: boolean;
    public handleRejections?: boolean;

    constructor(opts?: TransportStream.TransportStreamOptions);

    public log?(info: any, next: () => void): any;
    public logv?(info: any, next: () => void): any;
    public close?(): void;
  }

  declare namespace TransportStream {
    interface TransportStreamOptions {
      format?: logform.Format;
      level?: string;
      silent?: boolean;
      handleExceptions?: boolean;
      handleRejections?: boolean;

      log?(info: any, next: () => void): any;
      logv?(info: any, next: () => void): any;
      close?(): void;
    }
  }

  declare class LogseneTransport extends TransportStream {
    constructor(opts: LogseneTransport.TransportOptions);
  }

  declare namespace LogseneTransport {
    interface TransportOptions extends TransportStream.TransportStreamOptions {
      token: string;
    }
  }

  export default CloudWatchTransport;
}
