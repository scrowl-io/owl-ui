import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFormatAlignLeftProps } from './FormatAlignLeft.types';

export const Component = (props: IconsFormatAlignLeftProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>format_align_left</Default>;
};

export default {
  Component,
};
