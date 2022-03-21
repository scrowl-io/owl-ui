import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsArrowUpwardProps } from './ArrowUpward.types';

export const Component = (props: IconsArrowUpwardProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>arrow_upward</Default>;
};

export default {
  Component,
};
