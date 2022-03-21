import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsAirportShuttleProps } from './AirportShuttle.types';

export const Component = (props: IconsAirportShuttleProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>airport_shuttle</Default>;
};

export default {
  Component,
};
