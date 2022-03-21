import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsBurstModeProps } from './BurstMode.types';

export const Component = (props: IconsBurstModeProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>burst_mode</Default>;
};

export default {
  Component,
};
