import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLinkedCameraProps } from './LinkedCamera.types';

export const Component = (props: IconsLinkedCameraProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>linked_camera</Default>;
};

export default {
  Component,
};
