import MohismLogger, { LOG_DRIVER } from "./mohism-log";
import consoleLogger from "./console-log";

/**
 * 根据NODE_ENV获取logger实例
 * production时使用log4js输出到文件
 * 否则输出到console
 */
function getLogger() {
  if (process.env.NODE_ENV === 'production') {
    return new MohismLogger({
      appID: Number.parseInt(process.env.APP_ID || '9999',10),
      logPath: '/tmp',
      driver: LOG_DRIVER.log4js,
      level: process.env.LOG_LEVEL || 'debug',
    });
  }
  return consoleLogger;
}

export default getLogger;