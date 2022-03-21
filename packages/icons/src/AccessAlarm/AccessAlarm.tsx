import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsAccessAlarmProps } from './AccessAlarm.types';

export const Component = (props: IconsAccessAlarmProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>access_alarm</Default>;
};

export default {
  Component,
};
