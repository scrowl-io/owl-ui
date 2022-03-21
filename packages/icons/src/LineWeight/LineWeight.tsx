import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLineWeightProps } from './LineWeight.types';

export const Component = (props: IconsLineWeightProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>line_weight</Default>;
};

export default {
  Component,
};
