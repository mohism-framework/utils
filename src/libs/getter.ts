import { Dict } from './type';

export default class Getter<T extends Dict<U>, U> {
  private data: T;

  constructor(data: T) {
    this.data = data;
  }

  get(name: string): U {
    return this.data[name];
  }
}

