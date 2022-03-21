import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFormatAlignCenterProps } from './FormatAlignCenter.types';

export const Component = (props: IconsFormatAlignCenterProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>format_align_center</Default>;
};

export default {
  Component,
};
