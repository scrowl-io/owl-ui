import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLocalGasStationProps } from './LocalGasStation.types';

export const Component = (props: IconsLocalGasStationProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>local_gas_station</Default>;
};

export default {
  Component,
};
