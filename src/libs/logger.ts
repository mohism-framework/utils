import { blue, grey, yellow, red } from 'colors';
import rp from './rightpad';
import dayjs from 'dayjs';

const stringify = (input: any): string => {
  return (typeof input === 'string' ? input : JSON.stringify(input));
};

export class ConsoleLogger {
  info(ctx: any): void {
    console.log(`${blue(rp('[INFO]', 6))} ${grey(dayjs().format('YYYY-MM-DD HH:mm:ss'))} ${grey(stringify(ctx))}`);
  }

  warn(ctx: any): void {
    console.log(`${yellow(rp('[WARN]', 6))} ${grey(dayjs().format('YYYY-MM-DD HH:mm:ss'))} ${grey(stringify(ctx))}`);
  }

  // 为对下兼容而重复
  err(ctx: any): void {
    console.error(`${red(rp('[ERR]', 6))} ${grey(dayjs().format('YYYY-MM-DD HH:mm:ss'))} ${grey(stringify(ctx))}`);
  }
  error(ctx: any): void {
    console.error(`${red(rp('[ERR]', 6))} ${grey(dayjs().format('YYYY-MM-DD HH:mm:ss'))} ${grey(stringify(ctx))}`);
  }
}

export default new ConsoleLogger();