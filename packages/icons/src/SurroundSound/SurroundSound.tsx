import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSurroundSoundProps } from './SurroundSound.types';

export const Component = (props: IconsSurroundSoundProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>surround_sound</Default>;
};

export default {
  Component,
};
