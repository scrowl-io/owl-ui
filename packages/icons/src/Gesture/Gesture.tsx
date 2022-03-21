import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsGestureProps } from './Gesture.types';

export const Component = (props: IconsGestureProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>gesture</Default>;
};

export default {
  Component,
};
