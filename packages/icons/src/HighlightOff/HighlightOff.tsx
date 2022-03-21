import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsHighlightOffProps } from './HighlightOff.types';

export const Component = (props: IconsHighlightOffProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>highlight_off</Default>;
};

export default {
  Component,
};
