import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsCastConnectedProps } from './CastConnected.types';

export const Component = (props: IconsCastConnectedProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>cast_connected</Default>;
};

export default {
  Component,
};
