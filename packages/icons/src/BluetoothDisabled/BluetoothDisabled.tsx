import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsBluetoothDisabledProps } from './BluetoothDisabled.types';

export const Component = (props: IconsBluetoothDisabledProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>bluetooth_disabled</Default>;
};

export default {
  Component,
};
