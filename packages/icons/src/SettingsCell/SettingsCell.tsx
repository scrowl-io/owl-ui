import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSettingsCellProps } from './SettingsCell.types';

export const Component = (props: IconsSettingsCellProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>settings_cell</Default>;
};

export default {
  Component,
};
