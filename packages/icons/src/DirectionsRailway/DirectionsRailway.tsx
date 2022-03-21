import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsDirectionsRailwayProps } from './DirectionsRailway.types';

export const Component = (props: IconsDirectionsRailwayProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>directions_railway</Default>;
};

export default {
  Component,
};
