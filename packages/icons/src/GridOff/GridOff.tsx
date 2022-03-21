import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsGridOffProps } from './GridOff.types';

export const Component = (props: IconsGridOffProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>grid_off</Default>;
};

export default {
  Component,
};
