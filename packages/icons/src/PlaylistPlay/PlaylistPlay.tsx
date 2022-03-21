import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPlaylistPlayProps } from './PlaylistPlay.types';

export const Component = (props: IconsPlaylistPlayProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>playlist_play</Default>;
};

export default {
  Component,
};
