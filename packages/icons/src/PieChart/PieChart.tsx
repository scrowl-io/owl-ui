import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPieChartProps } from './PieChart.types';

export const Component = (props: IconsPieChartProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>pie_chart</Default>;
};

export default {
  Component,
};
