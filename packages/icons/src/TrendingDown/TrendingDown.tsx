import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsTrendingDownProps } from './TrendingDown.types';

export const Component = (props: IconsTrendingDownProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>trending_down</Default>;
};

export default {
  Component,
};
