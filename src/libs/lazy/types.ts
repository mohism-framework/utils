/**
 * 产生实例的方法
 */
export interface IMaker<T> {
  (): Promise<T>;
}

export interface ILazyFactory {
  (maker: IMaker<any>): Function;
}