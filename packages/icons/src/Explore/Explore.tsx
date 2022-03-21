import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsExploreProps } from './Explore.types';

export const Component = (props: IconsExploreProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>explore</Default>;
};

export default {
  Component,
};
