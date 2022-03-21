import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsArtTrackProps } from './ArtTrack.types';

export const Component = (props: IconsArtTrackProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>art_track</Default>;
};

export default {
  Component,
};
