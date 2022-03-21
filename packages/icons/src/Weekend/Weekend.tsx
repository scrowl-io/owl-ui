import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsWeekendProps } from './Weekend.types';

export const Component = (props: IconsWeekendProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>weekend</Default>;
};

export default {
  Component,
};
