import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsVolumeMuteProps } from './VolumeMute.types';

export const Component = (props: IconsVolumeMuteProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>volume_mute</Default>;
};

export default {
  Component,
};
