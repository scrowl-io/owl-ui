import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLocalAirportProps } from './LocalAirport.types';

export const Component = (props: IconsLocalAirportProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>local_airport</Default>;
};

export default {
  Component,
};
