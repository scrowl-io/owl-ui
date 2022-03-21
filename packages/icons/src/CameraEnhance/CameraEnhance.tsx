import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsCameraEnhanceProps } from './CameraEnhance.types';

export const Component = (props: IconsCameraEnhanceProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>camera_enhance</Default>;
};

export default {
  Component,
};
