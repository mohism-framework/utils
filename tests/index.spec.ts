import { assert,expect } from 'chai';
import { describe, it } from 'mocha';

import { Logger, rightpad } from '../src';
import { ConsoleLogger } from '../src/libs/logger';

describe('load libs', () => {
  it('logger', () => {
    expect(Logger).is.instanceOf(ConsoleLogger)
  });
  it('rightpad', () => {
    assert.equal(rightpad.name, 'rightpad');
  });
});