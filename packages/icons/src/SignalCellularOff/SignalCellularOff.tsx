import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSignalCellularOffProps } from './SignalCellularOff.types';

export const Component = (props: IconsSignalCellularOffProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>signal_cellular_off</Default>;
};

export default {
  Component,
};
