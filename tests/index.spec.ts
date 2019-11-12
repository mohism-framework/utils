import { assert } from 'chai';
import { describe, it } from 'mocha';

import { Logger, rightpad } from '../src';

describe('load libs', () => {
  it('logger', () => {
    assert.equal(Logger.name, 'Logger');
  });
  it('rightpad', () => {
    assert.equal(rightpad.name, 'rightpad');
  });
});