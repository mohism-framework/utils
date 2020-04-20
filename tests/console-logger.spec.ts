import { describe, it } from 'mocha';

import Logger from '../src/libs/logs/console-log';

describe('logger tests', () => {
  it('info', () => {
    Logger.info('info');
  });
  it('warn', () => {
    Logger.warn('warn');
  });
  it('err', () => {
    Logger.err('err');
  });
  it('info object', () => {
    Logger.info({});
  });
});