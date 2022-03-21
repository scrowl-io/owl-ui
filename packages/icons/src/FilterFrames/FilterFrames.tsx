import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFilterFramesProps } from './FilterFrames.types';

export const Component = (props: IconsFilterFramesProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>filter_frames</Default>;
};

export default {
  Component,
};
