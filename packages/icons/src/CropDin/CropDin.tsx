import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsCropDinProps } from './CropDin.types';

export const Component = (props: IconsCropDinProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>crop_din</Default>;
};

export default {
  Component,
};
