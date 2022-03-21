import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsMusicVideoProps } from './MusicVideo.types';

export const Component = (props: IconsMusicVideoProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>music_video</Default>;
};

export default {
  Component,
};
