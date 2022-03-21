import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsTrackChangesProps } from './TrackChanges.types';

export const Component = (props: IconsTrackChangesProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>track_changes</Default>;
};

export default {
  Component,
};
