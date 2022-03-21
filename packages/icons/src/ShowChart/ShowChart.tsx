import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsShowChartProps } from './ShowChart.types';

export const Component = (props: IconsShowChartProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>show_chart</Default>;
};

export default {
  Component,
};
