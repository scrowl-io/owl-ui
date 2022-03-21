import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFormatTextdirectionLToRProps } from './FormatTextdirectionLToR.types';

export const Component = (props: IconsFormatTextdirectionLToRProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>format_textdirection_l_to_r</Default>;
};

export default {
  Component,
};
