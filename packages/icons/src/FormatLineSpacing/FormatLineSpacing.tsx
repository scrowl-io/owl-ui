import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFormatLineSpacingProps } from './FormatLineSpacing.types';

export const Component = (props: IconsFormatLineSpacingProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>format_line_spacing</Default>;
};

export default {
  Component,
};
