import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSettingsProps } from './Settings.types';

export const Component = (props: IconsSettingsProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>settings</Default>;
};

export default {
  Component,
};
