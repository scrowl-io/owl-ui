import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsBatteryAlertProps } from './BatteryAlert.types';

export const Component = (props: IconsBatteryAlertProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>battery_alert</Default>;
};

export default {
  Component,
};
