import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFullscreenExitProps } from './FullscreenExit.types';

export const Component = (props: IconsFullscreenExitProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>fullscreen_exit</Default>;
};

export default {
  Component,
};
