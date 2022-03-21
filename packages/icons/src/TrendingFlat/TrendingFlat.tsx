import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsTrendingFlatProps } from './TrendingFlat.types';

export const Component = (props: IconsTrendingFlatProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>trending_flat</Default>;
};

export default {
  Component,
};
