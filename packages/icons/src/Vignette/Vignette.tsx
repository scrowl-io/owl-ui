import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsVignetteProps } from './Vignette.types';

export const Component = (props: IconsVignetteProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>vignette</Default>;
};

export default {
  Component,
};
