import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPhotoCameraProps } from './PhotoCamera.types';

export const Component = (props: IconsPhotoCameraProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>photo_camera</Default>;
};

export default {
  Component,
};
