import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsBatteryFullProps } from './BatteryFull.types';

export const Component = (props: IconsBatteryFullProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>battery_full</Default>;
};

export default {
  Component,
};
