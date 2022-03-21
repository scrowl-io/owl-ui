import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsClearAllProps } from './ClearAll.types';

export const Component = (props: IconsClearAllProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>clear_all</Default>;
};

export default {
  Component,
};
