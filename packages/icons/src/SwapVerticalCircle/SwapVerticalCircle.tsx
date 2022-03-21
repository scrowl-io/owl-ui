import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSwapVerticalCircleProps } from './SwapVerticalCircle.types';

export const Component = (props: IconsSwapVerticalCircleProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>swap_vertical_circle</Default>;
};

export default {
  Component,
};
