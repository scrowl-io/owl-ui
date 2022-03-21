import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsVerticalAlignTopProps } from './VerticalAlignTop.types';

export const Component = (props: IconsVerticalAlignTopProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>vertical_align_top</Default>;
};

export default {
  Component,
};
