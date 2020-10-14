import MohismLogger, { LOG_DRIVER } from "./mohism-log";
import consoleLogger from "./console-log";

function getLogger() {
  if (process.env.NODE_ENV === 'production') {
    return new MohismLogger({
      appID: Number.parseInt(process.env.APP_ID || '9999',10),
      logPath: '/tmp',
      driver: LOG_DRIVER.log4js,
    });
  }
  return consoleLogger;
}

export default getLogger;