import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSettingsSystemDaydreamProps } from './SettingsSystemDaydream.types';

export const Component = (props: IconsSettingsSystemDaydreamProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>settings_system_daydream</Default>;
};

export default {
  Component,
};
