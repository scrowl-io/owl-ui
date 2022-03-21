import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSettingsInputAntennaProps } from './SettingsInputAntenna.types';

export const Component = (props: IconsSettingsInputAntennaProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>settings_input_antenna</Default>;
};

export default {
  Component,
};
