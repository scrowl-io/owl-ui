import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsMultilineChartProps } from './MultilineChart.types';

export const Component = (props: IconsMultilineChartProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>multiline_chart</Default>;
};

export default {
  Component,
};
