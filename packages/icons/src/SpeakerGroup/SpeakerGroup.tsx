import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSpeakerGroupProps } from './SpeakerGroup.types';

export const Component = (props: IconsSpeakerGroupProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>speaker_group</Default>;
};

export default {
  Component,
};
