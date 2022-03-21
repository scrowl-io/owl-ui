import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSignalCellularNoSimProps } from './SignalCellularNoSim.types';

export const Component = (props: IconsSignalCellularNoSimProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>signal_cellular_no_sim</Default>;
};

export default {
  Component,
};
