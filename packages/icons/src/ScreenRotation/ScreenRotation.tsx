import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsScreenRotationProps } from './ScreenRotation.types';

export const Component = (props: IconsScreenRotationProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>screen_rotation</Default>;
};

export default {
  Component,
};
