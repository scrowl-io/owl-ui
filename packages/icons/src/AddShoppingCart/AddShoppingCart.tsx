import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsAddShoppingCartProps } from './AddShoppingCart.types';

export const Component = (props: IconsAddShoppingCartProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>add_shopping_cart</Default>;
};

export default {
  Component,
};
