import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFormatSizeProps } from './FormatSize.types';

export const Component = (props: IconsFormatSizeProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>format_size</Default>;
};

export default {
  Component,
};
