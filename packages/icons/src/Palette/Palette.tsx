import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPaletteProps } from './Palette.types';

export const Component = (props: IconsPaletteProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>palette</Default>;
};

export default {
  Component,
};
