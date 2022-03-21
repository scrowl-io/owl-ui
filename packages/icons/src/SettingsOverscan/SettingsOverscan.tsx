import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSettingsOverscanProps } from './SettingsOverscan.types';

export const Component = (props: IconsSettingsOverscanProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>settings_overscan</Default>;
};

export default {
  Component,
};
