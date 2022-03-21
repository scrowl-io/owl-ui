import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPlayCircleFilledProps } from './PlayCircleFilled.types';

export const Component = (props: IconsPlayCircleFilledProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>play_circle_filled</Default>;
};

export default {
  Component,
};
