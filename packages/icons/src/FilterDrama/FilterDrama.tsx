import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFilterDramaProps } from './FilterDrama.types';

export const Component = (props: IconsFilterDramaProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>filter_drama</Default>;
};

export default {
  Component,
};
