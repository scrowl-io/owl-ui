import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsShuffleProps } from './Shuffle.types';

export const Component = (props: IconsShuffleProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>shuffle</Default>;
};

export default {
  Component,
};
