import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsAlarmProps } from './Alarm.types';

export const Component = (props: IconsAlarmProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>alarm</Default>;
};

export default {
  Component,
};
