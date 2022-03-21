import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSettingsEthernetProps } from './SettingsEthernet.types';

export const Component = (props: IconsSettingsEthernetProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>settings_ethernet</Default>;
};

export default {
  Component,
};
