import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsVerticalAlignCenterProps } from './VerticalAlignCenter.types';

export const Component = (props: IconsVerticalAlignCenterProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>vertical_align_center</Default>;
};

export default {
  Component,
};
