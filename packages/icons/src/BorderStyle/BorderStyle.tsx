import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsBorderStyleProps } from './BorderStyle.types';

export const Component = (props: IconsBorderStyleProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>border_style</Default>;
};

export default {
  Component,
};
