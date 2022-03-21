import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsTimelineProps } from './Timeline.types';

export const Component = (props: IconsTimelineProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>timeline</Default>;
};

export default {
  Component,
};
