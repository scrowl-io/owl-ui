import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFormatAlignJustifyProps } from './FormatAlignJustify.types';

export const Component = (props: IconsFormatAlignJustifyProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>format_align_justify</Default>;
};

export default {
  Component,
};
