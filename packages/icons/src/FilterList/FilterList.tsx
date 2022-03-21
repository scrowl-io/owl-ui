import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFilterListProps } from './FilterList.types';

export const Component = (props: IconsFilterListProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>filter_list</Default>;
};

export default {
  Component,
};
