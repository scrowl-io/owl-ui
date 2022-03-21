import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsRotate90DegreesCcwProps } from './Rotate90DegreesCcw.types';

export const Component = (props: IconsRotate90DegreesCcwProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>rotate_90_degrees_ccw</Default>;
};

export default {
  Component,
};
