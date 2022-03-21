import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsBlurOnProps } from './BlurOn.types';

export const Component = (props: IconsBlurOnProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>blur_on</Default>;
};

export default {
  Component,
};
