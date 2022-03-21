import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsNetworkWifiProps } from './NetworkWifi.types';

export const Component = (props: IconsNetworkWifiProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>network_wifi</Default>;
};

export default {
  Component,
};
