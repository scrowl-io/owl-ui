import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsShoppingBasketProps } from './ShoppingBasket.types';

export const Component = (props: IconsShoppingBasketProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>shopping_basket</Default>;
};

export default {
  Component,
};
