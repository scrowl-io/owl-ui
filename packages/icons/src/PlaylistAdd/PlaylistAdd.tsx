import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPlaylistAddProps } from './PlaylistAdd.types';

export const Component = (props: IconsPlaylistAddProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>playlist_add</Default>;
};

export default {
  Component,
};
