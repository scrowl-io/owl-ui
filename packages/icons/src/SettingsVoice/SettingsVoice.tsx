import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSettingsVoiceProps } from './SettingsVoice.types';

export const Component = (props: IconsSettingsVoiceProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>settings_voice</Default>;
};

export default {
  Component,
};
