import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFlightLandProps } from './FlightLand.types';

export const Component = (props: IconsFlightLandProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>flight_land</Default>;
};

export default {
  Component,
};
