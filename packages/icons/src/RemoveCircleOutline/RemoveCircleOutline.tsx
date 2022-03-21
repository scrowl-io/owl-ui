import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsRemoveCircleOutlineProps } from './RemoveCircleOutline.types';

export const Component = (props: IconsRemoveCircleOutlineProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>remove_circle_outline</Default>;
};

export default {
  Component,
};
