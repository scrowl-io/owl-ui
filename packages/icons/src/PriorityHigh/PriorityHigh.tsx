import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPriorityHighProps } from './PriorityHigh.types';

export const Component = (props: IconsPriorityHighProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>priority_high</Default>;
};

export default {
  Component,
};
