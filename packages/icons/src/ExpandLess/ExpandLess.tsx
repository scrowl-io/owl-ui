import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsExpandLessProps } from './ExpandLess.types';

export const Component = (props: IconsExpandLessProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>expand_less</Default>;
};

export default {
  Component,
};
