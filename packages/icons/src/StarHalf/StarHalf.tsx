import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsStarHalfProps } from './StarHalf.types';

export const Component = (props: IconsStarHalfProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>star_half</Default>;
};

export default {
  Component,
};
