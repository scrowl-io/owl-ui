import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsGpsNotFixedProps } from './GpsNotFixed.types';

export const Component = (props: IconsGpsNotFixedProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>gps_not_fixed</Default>;
};

export default {
  Component,
};
