import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsCropRotateProps } from './CropRotate.types';

export const Component = (props: IconsCropRotateProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>crop_rotate</Default>;
};

export default {
  Component,
};
