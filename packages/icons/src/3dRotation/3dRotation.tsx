import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { Icons3dRotationProps } from './3dRotation.types';

export const Component = (props: Icons3dRotationProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>3d_rotation</Default>;
};

export default {
  Component,
};
