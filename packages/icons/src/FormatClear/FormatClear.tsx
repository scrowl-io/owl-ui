import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFormatClearProps } from './FormatClear.types';

export const Component = (props: IconsFormatClearProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>format_clear</Default>;
};

export default {
  Component,
};
