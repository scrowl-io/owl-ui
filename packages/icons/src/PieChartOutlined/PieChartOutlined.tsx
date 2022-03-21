import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPieChartOutlinedProps } from './PieChartOutlined.types';

export const Component = (props: IconsPieChartOutlinedProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>pie_chart_outlined</Default>;
};

export default {
  Component,
};
