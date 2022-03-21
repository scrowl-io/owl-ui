import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsBluetoothSearchingProps } from './BluetoothSearching.types';

export const Component = (props: IconsBluetoothSearchingProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>bluetooth_searching</Default>;
};

export default {
  Component,
};
