import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsViewDayProps } from './ViewDay.types';

export const Component = (props: IconsViewDayProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>view_day</Default>;
};

export default {
  Component,
};
