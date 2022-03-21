import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSettingsBrightnessProps } from './SettingsBrightness.types';

export const Component = (props: IconsSettingsBrightnessProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>settings_brightness</Default>;
};

export default {
  Component,
};
