import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsAirlineSeatIndividualSuiteProps } from './AirlineSeatIndividualSuite.types';

export const Component = (props: IconsAirlineSeatIndividualSuiteProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>airline_seat_individual_suite</Default>;
};

export default {
  Component,
};
