import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFormatColorResetProps } from './FormatColorReset.types';

export const Component = (props: IconsFormatColorResetProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>format_color_reset</Default>;
};

export default {
  Component,
};
