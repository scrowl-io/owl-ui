import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsCompareArrowsProps } from './CompareArrows.types';

export const Component = (props: IconsCompareArrowsProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>compare_arrows</Default>;
};

export default {
  Component,
};
