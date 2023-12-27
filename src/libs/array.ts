/**
 * 统计一个对象数组里，
 * @param arr 对象数组
 * @param key 
 * @param trans 
 * @returns 
 */

export const countBy = function (
  arr: Array<{ [key: string]: any }>,
  key: string,
  trans: (key: string) => string = key => key,
) {
  const result: { [key: string]: number } = {};
  arr.forEach(row => {
    result[trans(row[key])] = result[trans(row[key])] || 0;
    result[trans(row[key])]++;
  }
  );
  return result;
};