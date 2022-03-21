import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSwapHorizProps } from './SwapHoriz.types';

export const Component = (props: IconsSwapHorizProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>swap_horiz</Default>;
};

export default {
  Component,
};
