import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsWifiLockProps } from './WifiLock.types';

export const Component = (props: IconsWifiLockProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>wifi_lock</Default>;
};

export default {
  Component,
};
