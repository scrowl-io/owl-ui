import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsBorderColorProps } from './BorderColor.types';

export const Component = (props: IconsBorderColorProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>border_color</Default>;
};

export default {
  Component,
};
