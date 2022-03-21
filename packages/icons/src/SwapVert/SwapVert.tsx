import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSwapVertProps } from './SwapVert.types';

export const Component = (props: IconsSwapVertProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>swap_vert</Default>;
};

export default {
  Component,
};
