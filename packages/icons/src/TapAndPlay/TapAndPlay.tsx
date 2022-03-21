import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsTapAndPlayProps } from './TapAndPlay.types';

export const Component = (props: IconsTapAndPlayProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>tap_and_play</Default>;
};

export default {
  Component,
};
