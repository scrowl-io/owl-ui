import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsOpacityProps } from './Opacity.types';

export const Component = (props: IconsOpacityProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>opacity</Default>;
};

export default {
  Component,
};
