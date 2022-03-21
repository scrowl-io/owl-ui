import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsDonutSmallProps } from './DonutSmall.types';

export const Component = (props: IconsDonutSmallProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>donut_small</Default>;
};

export default {
  Component,
};
