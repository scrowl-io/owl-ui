import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsCastProps } from './Cast.types';

export const Component = (props: IconsCastProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>cast</Default>;
};

export default {
  Component,
};
