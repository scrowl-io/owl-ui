import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsRecordVoiceOverProps } from './RecordVoiceOver.types';

export const Component = (props: IconsRecordVoiceOverProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>record_voice_over</Default>;
};

export default {
  Component,
};
