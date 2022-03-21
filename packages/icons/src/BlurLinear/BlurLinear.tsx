import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsBlurLinearProps } from './BlurLinear.types';

export const Component = (props: IconsBlurLinearProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>blur_linear</Default>;
};

export default {
  Component,
};
