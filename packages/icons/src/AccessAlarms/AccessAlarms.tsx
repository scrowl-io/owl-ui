import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsAccessAlarmsProps } from './AccessAlarms.types';

export const Component = (props: IconsAccessAlarmsProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>access_alarms</Default>;
};

export default {
  Component,
};
