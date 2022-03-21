import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsBorderInnerProps } from './BorderInner.types';

export const Component = (props: IconsBorderInnerProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>border_inner</Default>;
};

export default {
  Component,
};
