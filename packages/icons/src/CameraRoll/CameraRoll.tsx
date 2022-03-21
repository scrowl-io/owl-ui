import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsCameraRollProps } from './CameraRoll.types';

export const Component = (props: IconsCameraRollProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>camera_roll</Default>;
};

export default {
  Component,
};
