import { assert } from 'chai';
import { describe, it } from 'mocha';
import Logger from '../src/libs/logger';

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