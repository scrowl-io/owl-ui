import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsHelpOutlineProps } from './HelpOutline.types';

export const Component = (props: IconsHelpOutlineProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>help_outline</Default>;
};

export default {
  Component,
};
