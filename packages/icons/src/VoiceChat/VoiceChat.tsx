import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsVoiceChatProps } from './VoiceChat.types';

export const Component = (props: IconsVoiceChatProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>voice_chat</Default>;
};

export default {
  Component,
};
