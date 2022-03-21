import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsCakeProps } from './Cake.types';

export const Component = (props: IconsCakeProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>cake</Default>;
};

export default {
  Component,
};
