import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFlightTakeoffProps } from './FlightTakeoff.types';

export const Component = (props: IconsFlightTakeoffProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>flight_takeoff</Default>;
};

export default {
  Component,
};
