import { ADD_TO_CART } from './types';

export const addToCart = (item: any) => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};