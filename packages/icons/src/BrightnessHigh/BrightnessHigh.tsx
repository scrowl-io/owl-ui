import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsBrightnessHighProps } from './BrightnessHigh.types';

export const Component = (props: IconsBrightnessHighProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>brightness_high</Default>;
};

export default {
  Component,
};
