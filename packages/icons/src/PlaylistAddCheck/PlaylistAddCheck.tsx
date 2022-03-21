import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPlaylistAddCheckProps } from './PlaylistAddCheck.types';

export const Component = (props: IconsPlaylistAddCheckProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>playlist_add_check</Default>;
};

export default {
  Component,
};
