import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsNetworkCheckProps } from './NetworkCheck.types';

export const Component = (props: IconsNetworkCheckProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>network_check</Default>;
};

export default {
  Component,
};
