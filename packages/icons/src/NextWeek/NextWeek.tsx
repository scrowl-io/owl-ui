import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsNextWeekProps } from './NextWeek.types';

export const Component = (props: IconsNextWeekProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>next_week</Default>;
};

export default {
  Component,
};
