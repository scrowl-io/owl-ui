import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsAirlineSeatLegroomNormalProps } from './AirlineSeatLegroomNormal.types';

export const Component = (props: IconsAirlineSeatLegroomNormalProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>airline_seat_legroom_normal</Default>;
};

export default {
  Component,
};
