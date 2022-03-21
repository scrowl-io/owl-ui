import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSelectAllProps } from './SelectAll.types';

export const Component = (props: IconsSelectAllProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>select_all</Default>;
};

export default {
  Component,
};
