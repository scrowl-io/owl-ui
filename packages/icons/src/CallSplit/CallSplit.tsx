import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsCallSplitProps } from './CallSplit.types';

export const Component = (props: IconsCallSplitProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>call_split</Default>;
};

export default {
  Component,
};
