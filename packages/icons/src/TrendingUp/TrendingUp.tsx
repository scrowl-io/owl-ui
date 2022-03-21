import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsTrendingUpProps } from './TrendingUp.types';

export const Component = (props: IconsTrendingUpProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>trending_up</Default>;
};

export default {
  Component,
};
