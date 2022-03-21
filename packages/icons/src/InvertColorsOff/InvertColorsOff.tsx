import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsInvertColorsOffProps } from './InvertColorsOff.types';

export const Component = (props: IconsInvertColorsOffProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>invert_colors_off</Default>;
};

export default {
  Component,
};
