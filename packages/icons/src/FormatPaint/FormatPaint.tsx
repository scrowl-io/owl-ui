import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFormatPaintProps } from './FormatPaint.types';

export const Component = (props: IconsFormatPaintProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>format_paint</Default>;
};

export default {
  Component,
};
