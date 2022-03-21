import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsShopTwoProps } from './ShopTwo.types';

export const Component = (props: IconsShopTwoProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>shop_two</Default>;
};

export default {
  Component,
};
