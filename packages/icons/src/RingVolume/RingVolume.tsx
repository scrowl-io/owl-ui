import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsRingVolumeProps } from './RingVolume.types';

export const Component = (props: IconsRingVolumeProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>ring_volume</Default>;
};

export default {
  Component,
};
