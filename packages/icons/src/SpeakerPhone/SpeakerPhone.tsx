import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSpeakerPhoneProps } from './SpeakerPhone.types';

export const Component = (props: IconsSpeakerPhoneProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>speaker_phone</Default>;
};

export default {
  Component,
};
