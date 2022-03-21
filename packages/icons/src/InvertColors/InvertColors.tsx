import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsInvertColorsProps } from './InvertColors.types';

export const Component = (props: IconsInvertColorsProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>invert_colors</Default>;
};

export default {
  Component,
};
