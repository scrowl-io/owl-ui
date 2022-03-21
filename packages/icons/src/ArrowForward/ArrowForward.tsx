import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsArrowForwardProps } from './ArrowForward.types';

export const Component = (props: IconsArrowForwardProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>arrow_forward</Default>;
};

export default {
  Component,
};
