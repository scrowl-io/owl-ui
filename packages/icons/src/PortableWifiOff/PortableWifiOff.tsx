import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPortableWifiOffProps } from './PortableWifiOff.types';

export const Component = (props: IconsPortableWifiOffProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>portable_wifi_off</Default>;
};

export default {
  Component,
};
