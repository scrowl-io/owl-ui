import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsTransferWithinAStationProps } from './TransferWithinAStation.types';

export const Component = (props: IconsTransferWithinAStationProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>transfer_within_a_station</Default>;
};

export default {
  Component,
};
