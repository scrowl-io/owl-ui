import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsAirlineSeatLegroomReducedProps } from './AirlineSeatLegroomReduced.types';

export const Component = (props: IconsAirlineSeatLegroomReducedProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>airline_seat_legroom_reduced</Default>;
};

export default {
  Component,
};
