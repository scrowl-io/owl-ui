import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFormatColorTextProps } from './FormatColorText.types';

export const Component = (props: IconsFormatColorTextProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>format_color_text</Default>;
};

export default {
  Component,
};
