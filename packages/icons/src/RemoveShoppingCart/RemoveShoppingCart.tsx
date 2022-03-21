import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsRemoveShoppingCartProps } from './RemoveShoppingCart.types';

export const Component = (props: IconsRemoveShoppingCartProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>remove_shopping_cart</Default>;
};

export default {
  Component,
};
