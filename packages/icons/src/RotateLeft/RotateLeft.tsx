import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsRotateLeftProps } from './RotateLeft.types';

export const Component = (props: IconsRotateLeftProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>rotate_left</Default>;
};

export default {
  Component,
};
