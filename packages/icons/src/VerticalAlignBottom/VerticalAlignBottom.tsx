import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsVerticalAlignBottomProps } from './VerticalAlignBottom.types';

export const Component = (props: IconsVerticalAlignBottomProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>vertical_align_bottom</Default>;
};

export default {
  Component,
};
