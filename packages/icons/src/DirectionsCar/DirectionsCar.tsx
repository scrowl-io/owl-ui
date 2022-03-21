import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsDirectionsCarProps } from './DirectionsCar.types';

export const Component = (props: IconsDirectionsCarProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>directions_car</Default>;
};

export default {
  Component,
};
