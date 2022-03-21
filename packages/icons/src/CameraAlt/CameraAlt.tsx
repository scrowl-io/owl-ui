import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsCameraAltProps } from './CameraAlt.types';

export const Component = (props: IconsCameraAltProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>camera_alt</Default>;
};

export default {
  Component,
};
