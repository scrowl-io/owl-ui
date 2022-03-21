import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFormatUnderlinedProps } from './FormatUnderlined.types';

export const Component = (props: IconsFormatUnderlinedProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>format_underlined</Default>;
};

export default {
  Component,
};
