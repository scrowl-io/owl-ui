import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsAvTimerProps } from './AvTimer.types';

export const Component = (props: IconsAvTimerProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>av_timer</Default>;
};

export default {
  Component,
};
