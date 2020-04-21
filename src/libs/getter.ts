
import { Dict } from './type';

export default class Getter<T> {
  private data: Dict<T>;

  constructor(data: Dict<T>) {
    this.data = data;
  }

  get(name: string): T {
    return this.data[name];
  }
}

