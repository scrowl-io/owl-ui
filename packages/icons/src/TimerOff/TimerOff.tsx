import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsTimerOffProps } from './TimerOff.types';

export const Component = (props: IconsTimerOffProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>timer_off</Default>;
};

export default {
  Component,
};
