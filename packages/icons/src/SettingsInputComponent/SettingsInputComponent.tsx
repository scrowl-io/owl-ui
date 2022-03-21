import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSettingsInputComponentProps } from './SettingsInputComponent.types';

export const Component = (props: IconsSettingsInputComponentProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>settings_input_component</Default>;
};

export default {
  Component,
};
