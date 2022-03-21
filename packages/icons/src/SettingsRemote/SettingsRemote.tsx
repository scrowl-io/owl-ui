import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSettingsRemoteProps } from './SettingsRemote.types';

export const Component = (props: IconsSettingsRemoteProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>settings_remote</Default>;
};

export default {
  Component,
};
