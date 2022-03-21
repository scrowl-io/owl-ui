import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPlayArrowProps } from './PlayArrow.types';

export const Component = (props: IconsPlayArrowProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>play_arrow</Default>;
};

export default {
  Component,
};
