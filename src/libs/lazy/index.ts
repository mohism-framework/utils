
export interface IMaker<T> {
  (): Promise<T>;
}

export default <T>(maker: IMaker<T>) => {
  let instance: T | null = null;
  return async (): Promise<T> => {
    if (!instance) {
      instance = await maker();
    }
    return instance;
  };
};