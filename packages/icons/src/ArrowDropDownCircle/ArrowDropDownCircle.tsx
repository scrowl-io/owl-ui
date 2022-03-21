import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsArrowDropDownCircleProps } from './ArrowDropDownCircle.types';

export const Component = (props: IconsArrowDropDownCircleProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>arrow_drop_down_circle</Default>;
};

export default {
  Component,
};
