import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsDateRangeProps } from './DateRange.types';

export const Component = (props: IconsDateRangeProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>date_range</Default>;
};

export default {
  Component,
};
