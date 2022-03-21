import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsBlockProps } from './Block.types';

export const Component = (props: IconsBlockProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>block</Default>;
};

export default {
  Component,
};
