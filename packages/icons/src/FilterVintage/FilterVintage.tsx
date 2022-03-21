import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFilterVintageProps } from './FilterVintage.types';

export const Component = (props: IconsFilterVintageProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>filter_vintage</Default>;
};

export default {
  Component,
};
