import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsBorderOuterProps } from './BorderOuter.types';

export const Component = (props: IconsBorderOuterProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>border_outer</Default>;
};

export default {
  Component,
};
