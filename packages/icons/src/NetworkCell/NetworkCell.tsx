import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsNetworkCellProps } from './NetworkCell.types';

export const Component = (props: IconsNetworkCellProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>network_cell</Default>;
};

export default {
  Component,
};
