import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFormatItalicProps } from './FormatItalic.types';

export const Component = (props: IconsFormatItalicProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>format_italic</Default>;
};

export default {
  Component,
};
