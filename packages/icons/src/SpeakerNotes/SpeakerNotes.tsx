import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSpeakerNotesProps } from './SpeakerNotes.types';

export const Component = (props: IconsSpeakerNotesProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>speaker_notes</Default>;
};

export default {
  Component,
};
