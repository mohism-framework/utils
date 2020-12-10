/**
 * rightpad， count太小时，会切断原字符串
 * @param str 原字符串
 * @param count 目标长度
 * @param char 使用什么字符填充
 */
const rightpad = (str: string, count: number, char: string = ' '): string => {
  if (str.length > count) {
    return str.substr(0, count);
  }
  return `${str}${char.repeat(count - str.length)}`;
};

export default rightpad;