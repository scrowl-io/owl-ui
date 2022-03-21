import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsHighlightProps } from './Highlight.types';

export const Component = (props: IconsHighlightProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>highlight</Default>;
};

export default {
  Component,
};
