import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsHotTubProps } from './HotTub.types';

export const Component = (props: IconsHotTubProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>hot_tub</Default>;
};

export default {
  Component,
};
