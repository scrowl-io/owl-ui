import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSignalWifi4BarProps } from './SignalWifi4Bar.types';

export const Component = (props: IconsSignalWifi4BarProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>signal_wifi_4_bar</Default>;
};

export default {
  Component,
};
