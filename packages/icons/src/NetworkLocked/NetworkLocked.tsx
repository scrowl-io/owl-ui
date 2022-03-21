import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsNetworkLockedProps } from './NetworkLocked.types';

export const Component = (props: IconsNetworkLockedProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>network_locked</Default>;
};

export default {
  Component,
};
