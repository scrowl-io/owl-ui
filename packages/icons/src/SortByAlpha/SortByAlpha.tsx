import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSortByAlphaProps } from './SortByAlpha.types';

export const Component = (props: IconsSortByAlphaProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>sort_by_alpha</Default>;
};

export default {
  Component,
};
