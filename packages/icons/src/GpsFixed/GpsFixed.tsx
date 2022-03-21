import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsGpsFixedProps } from './GpsFixed.types';

export const Component = (props: IconsGpsFixedProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>gps_fixed</Default>;
};

export default {
  Component,
};
