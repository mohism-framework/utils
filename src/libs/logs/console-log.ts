import { blue, grey, yellow, red } from 'colors';
import rp from '../rightpad';
import dayjs from 'dayjs';

const stringify = (input: any): string => {
  return (typeof input === 'string' ? input : JSON.stringify(input));
};

const LEVEL_MAP: { [key: string]: number } = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
  ultra: 99,
}

export class ConsoleLogger {
  info(ctx: any): void {
    if (process.env.LOG_LEVEL && LEVEL_MAP[process.env.LOG_LEVEL] > LEVEL_MAP.info) {
      return;
    }
    console.log(`${blue(rp('[INFO]', 6))} ${grey(dayjs().format('YYYY-MM-DD HH:mm:ss'))} ${grey(stringify(ctx))}`);
  }

  warn(ctx: any): void {
    if (process.env.LOG_LEVEL && LEVEL_MAP[process.env.LOG_LEVEL] > LEVEL_MAP.warn) {
      return;
    }
    console.log(`${yellow(rp('[WARN]', 6))} ${grey(dayjs().format('YYYY-MM-DD HH:mm:ss'))} ${grey(stringify(ctx))}`);
  }

  // 为对下兼容而重复
  err(ctx: any): void {
    if (process.env.LOG_LEVEL && LEVEL_MAP[process.env.LOG_LEVEL] > LEVEL_MAP.error) {
      return;
    }
    console.error(`${red(rp('[ERR]', 6))} ${grey(dayjs().format('YYYY-MM-DD HH:mm:ss'))} ${grey(stringify(ctx))}`);
  }
  error(ctx: any): void {
    if (process.env.LOG_LEVEL && LEVEL_MAP[process.env.LOG_LEVEL] > LEVEL_MAP.error) {
      return;
    }
    console.error(`${red(rp('[ERR]', 6))} ${grey(dayjs().format('YYYY-MM-DD HH:mm:ss'))} ${grey(stringify(ctx))}`);
  }
}

export default new ConsoleLogger();