import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsDirectionsWalkProps } from './DirectionsWalk.types';

export const Component = (props: IconsDirectionsWalkProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>directions_walk</Default>;
};

export default {
  Component,
};
