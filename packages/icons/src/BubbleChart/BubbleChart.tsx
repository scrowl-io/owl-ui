import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsBubbleChartProps } from './BubbleChart.types';

export const Component = (props: IconsBubbleChartProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>bubble_chart</Default>;
};

export default {
  Component,
};
