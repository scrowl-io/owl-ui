import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsBrushProps } from './Brush.types';

export const Component = (props: IconsBrushProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>brush</Default>;
};

export default {
  Component,
};
