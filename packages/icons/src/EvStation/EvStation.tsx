import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsEvStationProps } from './EvStation.types';

export const Component = (props: IconsEvStationProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>ev_station</Default>;
};

export default {
  Component,
};
