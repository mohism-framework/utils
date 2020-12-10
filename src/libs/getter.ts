
import { Dict } from './type';

/**
 * 封装一个 Dict<T> 类型，使之可以调用 get(string) 方法获取元素
 */
export default class Getter<T> {
  private data: Dict<T>;

  constructor(data: Dict<T>) {
    this.data = data;
  }

  get(name: string): T {
    return this.data[name];
  }
}

