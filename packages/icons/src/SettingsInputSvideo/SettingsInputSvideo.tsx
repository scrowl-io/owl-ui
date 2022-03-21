import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSettingsInputSvideoProps } from './SettingsInputSvideo.types';

export const Component = (props: IconsSettingsInputSvideoProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>settings_input_svideo</Default>;
};

export default {
  Component,
};
