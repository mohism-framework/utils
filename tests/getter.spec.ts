import { describe, it } from 'mocha';
import { assert } from 'chai';
import { Dict } from '../src/libs/type';
import Getter from '../src/libs/getter';

describe('getter', () => {
  it('all', () => {
    const data: Dict<number> = {
      tom: 100,
      jerry: 90,
    };
    const getter = new Getter(data);
    assert(getter.get('tom') === 100);
    assert(getter.get('jerry') === 90);
    assert(getter.get('bob') === undefined);
  })
})