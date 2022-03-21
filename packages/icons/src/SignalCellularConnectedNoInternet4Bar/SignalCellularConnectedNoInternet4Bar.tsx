import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSignalCellularConnectedNoInternet4BarProps } from './SignalCellularConnectedNoInternet4Bar.types';

export const Component = (props: IconsSignalCellularConnectedNoInternet4BarProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>signal_cellular_connected_no_internet_4_bar</Default>;
};

export default {
  Component,
};
