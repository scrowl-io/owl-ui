import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsCallMergeProps } from './CallMerge.types';

export const Component = (props: IconsCallMergeProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>call_merge</Default>;
};

export default {
  Component,
};
