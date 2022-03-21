import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsCrop54Props } from './Crop54.types';

export const Component = (props: IconsCrop54Props) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>crop_5_4</Default>;
};

export default {
  Component,
};
