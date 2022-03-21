import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFormatColorFillProps } from './FormatColorFill.types';

export const Component = (props: IconsFormatColorFillProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>format_color_fill</Default>;
};

export default {
  Component,
};
