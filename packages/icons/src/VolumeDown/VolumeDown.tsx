import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsVolumeDownProps } from './VolumeDown.types';

export const Component = (props: IconsVolumeDownProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>volume_down</Default>;
};

export default {
  Component,
};
