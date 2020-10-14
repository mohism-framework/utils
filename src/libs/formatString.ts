/**
 * 将空格分隔的一组词，变成大驼峰模式
 * 如： here we are  =>  HereWeAre
 * @param input string
 */
export const toAbcDef = (input: string): string => {
  return input.split(' ').map((piece: string) => {
    return `${piece[0].toUpperCase()}${piece.substr(1)}`;
  }).join('');
};

/**
 * 将空格分隔的一组词，变成小驼峰模式
 * 如： here we are  =>  hereWeAre
 * @param input string
 */
export const toabcDef = (input: string): string => {
  return input.split(' ').map((piece: string, index: number) => {
    return `${index > 0 ? piece[0].toUpperCase() : piece[0]}${piece.substr(1)}`;
  }).join('');
};