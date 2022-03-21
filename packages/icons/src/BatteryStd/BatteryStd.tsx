import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsBatteryStdProps } from './BatteryStd.types';

export const Component = (props: IconsBatteryStdProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>battery_std</Default>;
};

export default {
  Component,
};
