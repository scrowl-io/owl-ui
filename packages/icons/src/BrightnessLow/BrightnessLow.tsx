import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsBrightnessLowProps } from './BrightnessLow.types';

export const Component = (props: IconsBrightnessLowProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>brightness_low</Default>;
};

export default {
  Component,
};
