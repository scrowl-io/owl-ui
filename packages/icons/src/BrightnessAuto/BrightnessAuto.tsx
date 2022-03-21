import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsBrightnessAutoProps } from './BrightnessAuto.types';

export const Component = (props: IconsBrightnessAutoProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>brightness_auto</Default>;
};

export default {
  Component,
};
