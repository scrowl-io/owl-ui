import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsCropSquareProps } from './CropSquare.types';

export const Component = (props: IconsCropSquareProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>crop_square</Default>;
};

export default {
  Component,
};
