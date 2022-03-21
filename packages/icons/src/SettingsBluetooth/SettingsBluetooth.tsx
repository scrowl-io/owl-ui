import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSettingsBluetoothProps } from './SettingsBluetooth.types';

export const Component = (props: IconsSettingsBluetoothProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>settings_bluetooth</Default>;
};

export default {
  Component,
};
