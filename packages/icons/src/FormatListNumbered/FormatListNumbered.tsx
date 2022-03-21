import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFormatListNumberedProps } from './FormatListNumbered.types';

export const Component = (props: IconsFormatListNumberedProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>format_list_numbered</Default>;
};

export default {
  Component,
};
