import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsGpsOffProps } from './GpsOff.types';

export const Component = (props: IconsGpsOffProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>gps_off</Default>;
};

export default {
  Component,
};
