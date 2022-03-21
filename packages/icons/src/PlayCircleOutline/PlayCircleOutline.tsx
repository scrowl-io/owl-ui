import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPlayCircleOutlineProps } from './PlayCircleOutline.types';

export const Component = (props: IconsPlayCircleOutlineProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>play_circle_outline</Default>;
};

export default {
  Component,
};
