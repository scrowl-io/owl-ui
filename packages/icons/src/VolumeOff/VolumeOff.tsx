import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsVolumeOffProps } from './VolumeOff.types';

export const Component = (props: IconsVolumeOffProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>volume_off</Default>;
};

export default {
  Component,
};
