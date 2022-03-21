import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsBorderTopProps } from './BorderTop.types';

export const Component = (props: IconsBorderTopProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>border_top</Default>;
};

export default {
  Component,
};
