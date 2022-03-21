import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsCameraRearProps } from './CameraRear.types';

export const Component = (props: IconsCameraRearProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>camera_rear</Default>;
};

export default {
  Component,
};
