import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsDirectionsTransitProps } from './DirectionsTransit.types';

export const Component = (props: IconsDirectionsTransitProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>directions_transit</Default>;
};

export default {
  Component,
};
