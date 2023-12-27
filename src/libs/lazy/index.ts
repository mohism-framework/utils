
export interface IMaker<T> {
  (): Promise<T>;
}

/**
 * 导出一个泛型方法，用来返回一个单例 Promise<T>
 * @param maker  参数是一个生成 Promise<T> 的方法
 * 任何可以返回一个对象实例的Promise都可以作为参数，使之变成单例模式
 */
export default <T>(maker: IMaker<T>) => {
  let instance: T | null = null;
  return async (): Promise<T> => {
    if (!instance) {
      instance = await maker();
    }
    return instance;
  };
};
