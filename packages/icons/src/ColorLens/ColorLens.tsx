import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsColorLensProps } from './ColorLens.types';

export const Component = (props: IconsColorLensProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>color_lens</Default>;
};

export default {
  Component,
};
