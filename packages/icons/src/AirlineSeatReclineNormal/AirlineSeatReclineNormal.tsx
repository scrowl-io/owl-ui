import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsAirlineSeatReclineNormalProps } from './AirlineSeatReclineNormal.types';

export const Component = (props: IconsAirlineSeatReclineNormalProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>airline_seat_recline_normal</Default>;
};

export default {
  Component,
};
