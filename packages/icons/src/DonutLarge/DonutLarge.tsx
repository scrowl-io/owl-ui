import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsDonutLargeProps } from './DonutLarge.types';

export const Component = (props: IconsDonutLargeProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>donut_large</Default>;
};

export default {
  Component,
};
