import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsAlarmOffProps } from './AlarmOff.types';

export const Component = (props: IconsAlarmOffProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>alarm_off</Default>;
};

export default {
  Component,
};
