import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSettingsInputHdmiProps } from './SettingsInputHdmi.types';

export const Component = (props: IconsSettingsInputHdmiProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>settings_input_hdmi</Default>;
};

export default {
  Component,
};
