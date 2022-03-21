import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsMusicNoteProps } from './MusicNote.types';

export const Component = (props: IconsMusicNoteProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>music_note</Default>;
};

export default {
  Component,
};
