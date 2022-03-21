import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPermCameraMicProps } from './PermCameraMic.types';

export const Component = (props: IconsPermCameraMicProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>perm_camera_mic</Default>;
};

export default {
  Component,
};
