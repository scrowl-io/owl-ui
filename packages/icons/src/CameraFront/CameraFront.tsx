import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsCameraFrontProps } from './CameraFront.types';

export const Component = (props: IconsCameraFrontProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>camera_front</Default>;
};

export default {
  Component,
};
