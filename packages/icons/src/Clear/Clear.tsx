import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsClearProps } from './Clear.types';

export const Component = (props: IconsClearProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>clear</Default>;
};

export default {
  Component,
};
