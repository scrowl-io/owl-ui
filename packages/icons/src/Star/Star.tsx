import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsStarProps } from './Star.types';

export const Component = (props: IconsStarProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>star</Default>;
};

export default {
  Component,
};
