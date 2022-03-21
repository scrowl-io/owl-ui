import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsRestaurantMenuProps } from './RestaurantMenu.types';

export const Component = (props: IconsRestaurantMenuProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>restaurant_menu</Default>;
};

export default {
  Component,
};
