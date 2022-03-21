import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsBorderHorizontalProps } from './BorderHorizontal.types';

export const Component = (props: IconsBorderHorizontalProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>border_horizontal</Default>;
};

export default {
  Component,
};
