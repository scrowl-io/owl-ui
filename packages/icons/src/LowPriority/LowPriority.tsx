import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLowPriorityProps } from './LowPriority.types';

export const Component = (props: IconsLowPriorityProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>low_priority</Default>;
};

export default {
  Component,
};
