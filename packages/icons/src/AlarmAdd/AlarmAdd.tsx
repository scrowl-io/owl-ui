import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsAlarmAddProps } from './AlarmAdd.types';

export const Component = (props: IconsAlarmAddProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>alarm_add</Default>;
};

export default {
  Component,
};
