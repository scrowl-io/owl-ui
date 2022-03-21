import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsCropOriginalProps } from './CropOriginal.types';

export const Component = (props: IconsCropOriginalProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>crop_original</Default>;
};

export default {
  Component,
};
