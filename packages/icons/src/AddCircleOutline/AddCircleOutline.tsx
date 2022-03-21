import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsAddCircleOutlineProps } from './AddCircleOutline.types';

export const Component = (props: IconsAddCircleOutlineProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>add_circle_outline</Default>;
};

export default {
  Component,
};
