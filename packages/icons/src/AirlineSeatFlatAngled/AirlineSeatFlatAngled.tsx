import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsAirlineSeatFlatAngledProps } from './AirlineSeatFlatAngled.types';

export const Component = (props: IconsAirlineSeatFlatAngledProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>airline_seat_flat_angled</Default>;
};

export default {
  Component,
};
