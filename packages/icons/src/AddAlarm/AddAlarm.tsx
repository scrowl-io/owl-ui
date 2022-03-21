import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsAddAlarmProps } from './AddAlarm.types';

export const Component = (props: IconsAddAlarmProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>add_alarm</Default>;
};

export default {
  Component,
};
