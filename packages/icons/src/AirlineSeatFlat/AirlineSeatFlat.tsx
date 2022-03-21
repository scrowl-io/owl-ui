import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsAirlineSeatFlatProps } from './AirlineSeatFlat.types';

export const Component = (props: IconsAirlineSeatFlatProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>airline_seat_flat</Default>;
};

export default {
  Component,
};
