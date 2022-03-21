import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSignalWifiOffProps } from './SignalWifiOff.types';

export const Component = (props: IconsSignalWifiOffProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>signal_wifi_off</Default>;
};

export default {
  Component,
};
