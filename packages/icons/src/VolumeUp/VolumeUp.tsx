import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsVolumeUpProps } from './VolumeUp.types';

export const Component = (props: IconsVolumeUpProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>volume_up</Default>;
};

export default {
  Component,
};
