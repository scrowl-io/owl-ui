import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsTabUnselectedProps } from './TabUnselected.types';

export const Component = (props: IconsTabUnselectedProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>tab_unselected</Default>;
};

export default {
  Component,
};
