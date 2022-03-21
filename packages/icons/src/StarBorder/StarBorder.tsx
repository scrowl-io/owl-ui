import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsStarBorderProps } from './StarBorder.types';

export const Component = (props: IconsStarBorderProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>star_border</Default>;
};

export default {
  Component,
};
