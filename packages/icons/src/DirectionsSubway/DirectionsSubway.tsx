import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsDirectionsSubwayProps } from './DirectionsSubway.types';

export const Component = (props: IconsDirectionsSubwayProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>directions_subway</Default>;
};

export default {
  Component,
};
