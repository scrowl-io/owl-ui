import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsColorizeProps } from './Colorize.types';

export const Component = (props: IconsColorizeProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>colorize</Default>;
};

export default {
  Component,
};
