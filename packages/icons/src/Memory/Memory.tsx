import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsMemoryProps } from './Memory.types';

export const Component = (props: IconsMemoryProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>memory</Default>;
};

export default {
  Component,
};
