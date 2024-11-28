import { ArrayFunction, ProductProps } from '../types';

export const filteringFunction: ArrayFunction<ProductProps> = (inputArr: ProductProps[], attribute: string) => {
  return inputArr.filter((product) => product.attribute === `${attribute}`);
};
