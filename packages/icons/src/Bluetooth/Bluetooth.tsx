import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsBluetoothProps } from './Bluetooth.types';

export const Component = (props: IconsBluetoothProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>bluetooth</Default>;
};

export default {
  Component,
};
