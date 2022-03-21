import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsUnfoldLessProps } from './UnfoldLess.types';

export const Component = (props: IconsUnfoldLessProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>unfold_less</Default>;
};

export default {
  Component,
};
