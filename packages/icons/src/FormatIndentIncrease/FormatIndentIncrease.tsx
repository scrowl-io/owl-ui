import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFormatIndentIncreaseProps } from './FormatIndentIncrease.types';

export const Component = (props: IconsFormatIndentIncreaseProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>format_indent_increase</Default>;
};

export default {
  Component,
};
