import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSignalWifi4BarLockProps } from './SignalWifi4BarLock.types';

export const Component = (props: IconsSignalWifi4BarLockProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>signal_wifi_4_bar_lock</Default>;
};

export default {
  Component,
};
