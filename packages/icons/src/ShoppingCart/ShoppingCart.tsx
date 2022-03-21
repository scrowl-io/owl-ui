import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsShoppingCartProps } from './ShoppingCart.types';

export const Component = (props: IconsShoppingCartProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>shopping_cart</Default>;
};

export default {
  Component,
};
