import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsAirlineSeatLegroomExtraProps } from './AirlineSeatLegroomExtra.types';

export const Component = (props: IconsAirlineSeatLegroomExtraProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>airline_seat_legroom_extra</Default>;
};

export default {
  Component,
};
