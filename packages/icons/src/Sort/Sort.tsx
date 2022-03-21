import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSortProps } from './Sort.types';

export const Component = (props: IconsSortProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>sort</Default>;
};

export default {
  Component,
};
