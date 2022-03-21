import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSettingsInputCompositeProps } from './SettingsInputComposite.types';

export const Component = (props: IconsSettingsInputCompositeProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>settings_input_composite</Default>;
};

export default {
  Component,
};
