export const mockRequestHelper = (mockValue: any): Promise<any> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockValue);
    }, 500);
  });
};
