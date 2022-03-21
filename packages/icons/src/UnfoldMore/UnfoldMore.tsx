import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsUnfoldMoreProps } from './UnfoldMore.types';

export const Component = (props: IconsUnfoldMoreProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>unfold_more</Default>;
};

export default {
  Component,
};
