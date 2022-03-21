import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsViewWeekProps } from './ViewWeek.types';

export const Component = (props: IconsViewWeekProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>view_week</Default>;
};

export default {
  Component,
};
