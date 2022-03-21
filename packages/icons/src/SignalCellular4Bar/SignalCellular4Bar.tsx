import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSignalCellular4BarProps } from './SignalCellular4Bar.types';

export const Component = (props: IconsSignalCellular4BarProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>signal_cellular_4_bar</Default>;
};

export default {
  Component,
};
