import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsBorderVerticalProps } from './BorderVertical.types';

export const Component = (props: IconsBorderVerticalProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>border_vertical</Default>;
};

export default {
  Component,
};
