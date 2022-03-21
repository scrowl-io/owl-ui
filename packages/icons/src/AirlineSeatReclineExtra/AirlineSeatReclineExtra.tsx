import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsAirlineSeatReclineExtraProps } from './AirlineSeatReclineExtra.types';

export const Component = (props: IconsAirlineSeatReclineExtraProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>airline_seat_recline_extra</Default>;
};

export default {
  Component,
};
