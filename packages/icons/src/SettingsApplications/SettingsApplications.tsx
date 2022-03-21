import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSettingsApplicationsProps } from './SettingsApplications.types';

export const Component = (props: IconsSettingsApplicationsProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>settings_applications</Default>;
};

export default {
  Component,
};
