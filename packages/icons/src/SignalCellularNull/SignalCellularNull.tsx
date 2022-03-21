import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSignalCellularNullProps } from './SignalCellularNull.types';

export const Component = (props: IconsSignalCellularNullProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>signal_cellular_null</Default>;
};

export default {
  Component,
};
