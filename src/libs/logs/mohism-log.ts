import log4js, { Logger as L4jLogger, LoggingEvent } from 'log4js';
import { hostname } from 'os';

import { ConsoleLogger } from './console-log';

export enum LOG_DRIVER {
  console = 'console',
  log4js = 'log4js',
}

export interface LogConf {
  appID?: number;
  logPath?: string;
  driver: LOG_DRIVER;
  level?: string;
}

export class MohismLogger {
  conf: LogConf;
  driver: L4jLogger | ConsoleLogger;
  constructor(conf: LogConf) {
    this.conf = conf;
    if (conf.driver === LOG_DRIVER.log4js) {
      this.driver = this.initLog4js();
    } else {
      this.driver = this.initConsole();
    }
  }

  initLog4js(): L4jLogger {
    const host: string = hostname();
    log4js.addLayout('json', () => {
      return (logEvent: LoggingEvent) => JSON.stringify({
        app: this.conf.appID,
        time: logEvent.startTime,
        level: logEvent.level.levelStr,
        data: logEvent.data[0],
        host,
      });
    });
    log4js.configure({
      appenders: {
        daily: {
          type: 'dateFile',
          layout: {
            type: 'json'
          },
          filename: `${this.conf.logPath}/${this.conf.appID}`,
          pattern: '.yyyy-MM-dd.log',
          alwaysIncludePattern: true,
          compress: true
        }
      },
      categories: {
        default: {
          appenders: ['daily'],
          level: 'info'
        }
      }
    });
    const logger = log4js.getLogger();
    if (this.conf.level) {
      logger.level = this.conf.level;
    }
    return logger;
  }

  initConsole(): ConsoleLogger {
    return new ConsoleLogger();
  }

  info(ctx: any): void {
    this.driver.info(ctx);
  }

  warn(ctx: any): void {
    this.driver.warn(ctx);
  }

  err(ctx: any): void {
    this.driver.error(ctx);
  }

  error(ctx: any): void {
    this.driver.error(ctx);
  }
}

export default MohismLogger;

