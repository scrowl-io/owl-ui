import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsShopProps } from './Shop.types';

export const Component = (props: IconsShopProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>shop</Default>;
};

export default {
  Component,
};
