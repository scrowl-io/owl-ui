import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFormatTextdirectionRToLProps } from './FormatTextdirectionRToL.types';

export const Component = (props: IconsFormatTextdirectionRToLProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>format_textdirection_r_to_l</Default>;
};

export default {
  Component,
};
