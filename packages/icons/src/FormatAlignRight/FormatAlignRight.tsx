import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFormatAlignRightProps } from './FormatAlignRight.types';

export const Component = (props: IconsFormatAlignRightProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>format_align_right</Default>;
};

export default {
  Component,
};
