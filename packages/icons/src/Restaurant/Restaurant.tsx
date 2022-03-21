import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsRestaurantProps } from './Restaurant.types';

export const Component = (props: IconsRestaurantProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>restaurant</Default>;
};

export default {
  Component,
};
