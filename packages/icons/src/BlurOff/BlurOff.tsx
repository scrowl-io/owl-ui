import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsBlurOffProps } from './BlurOff.types';

export const Component = (props: IconsBlurOffProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>blur_off</Default>;
};

export default {
  Component,
};
