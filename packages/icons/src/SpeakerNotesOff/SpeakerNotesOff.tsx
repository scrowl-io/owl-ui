import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSpeakerNotesOffProps } from './SpeakerNotesOff.types';

export const Component = (props: IconsSpeakerNotesOffProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>speaker_notes_off</Default>;
};

export default {
  Component,
};
