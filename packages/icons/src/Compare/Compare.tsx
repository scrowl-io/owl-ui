import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsCompareProps } from './Compare.types';

export const Component = (props: IconsCompareProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>compare</Default>;
};

export default {
  Component,
};
