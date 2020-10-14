import { Dict } from './type';

function doFlatting(prefix: string, obj: Dict<any>): Dict<any> {
  let result: Dict<any> = {};
  const keys = Object.keys(obj);
  for (const k of keys) {
    const curKey = prefix ? `${prefix}.${k}` : k;
    if (typeof obj[k] === 'object' && !Array.isArray(obj[k])) {
      const subSets = doFlatting(curKey, obj[k]);
      result = {
        ...result,
        ...subSets,
      };
    } else {
      result[curKey] = obj[k];
    }
  }
  return result;
}

export const reFlatting = (flat: Dict<any>): Dict<any> => {
  const result: Dict<any> = {};
  Object.keys(flat).forEach((key: string) => {
    const steps = key.split('.');
    let pointer = result;
    while (steps.length > 1) {
      const head = steps.shift() as string;
      pointer[head] = pointer[head] || {};
      pointer = pointer[head];
    }
    pointer[steps[0]] = flat[key];
  });
  return result;
};

export const flatting = (obj: object): Dict<any> => {
  return doFlatting('', obj);
};