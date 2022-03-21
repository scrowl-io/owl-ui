import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsWifiProps } from './Wifi.types';

export const Component = (props: IconsWifiProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>wifi</Default>;
};

export default {
  Component,
};
