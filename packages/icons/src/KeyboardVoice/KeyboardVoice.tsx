import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsKeyboardVoiceProps } from './KeyboardVoice.types';

export const Component = (props: IconsKeyboardVoiceProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>keyboard_voice</Default>;
};

export default {
  Component,
};
