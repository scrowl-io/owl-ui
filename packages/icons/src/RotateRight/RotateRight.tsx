import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsRotateRightProps } from './RotateRight.types';

export const Component = (props: IconsRotateRightProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>rotate_right</Default>;
};

export default {
  Component,
};
