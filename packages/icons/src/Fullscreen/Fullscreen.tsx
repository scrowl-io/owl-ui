import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFullscreenProps } from './Fullscreen.types';

export const Component = (props: IconsFullscreenProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>fullscreen</Default>;
};

export default {
  Component,
};
