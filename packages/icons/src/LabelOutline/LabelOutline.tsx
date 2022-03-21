import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLabelOutlineProps } from './LabelOutline.types';

export const Component = (props: IconsLabelOutlineProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>label_outline</Default>;
};

export default {
  Component,
};
