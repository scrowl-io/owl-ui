import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSatelliteProps } from './Satellite.types';

export const Component = (props: IconsSatelliteProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>satellite</Default>;
};

export default {
  Component,
};
