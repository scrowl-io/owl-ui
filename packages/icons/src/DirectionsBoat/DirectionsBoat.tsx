import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsDirectionsBoatProps } from './DirectionsBoat.types';

export const Component = (props: IconsDirectionsBoatProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>directions_boat</Default>;
};

export default {
  Component,
};
