import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsCameraProps } from './Camera.types';

export const Component = (props: IconsCameraProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>camera</Default>;
};

export default {
  Component,
};
