import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsControlPointProps } from './ControlPoint.types';

export const Component = (props: IconsControlPointProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>control_point</Default>;
};

export default {
  Component,
};
