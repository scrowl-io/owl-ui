import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsGradientProps } from './Gradient.types';

export const Component = (props: IconsGradientProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>gradient</Default>;
};

export default {
  Component,
};
