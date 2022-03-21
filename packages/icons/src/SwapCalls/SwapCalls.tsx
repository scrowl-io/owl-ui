import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSwapCallsProps } from './SwapCalls.types';

export const Component = (props: IconsSwapCallsProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>swap_calls</Default>;
};

export default {
  Component,
};
